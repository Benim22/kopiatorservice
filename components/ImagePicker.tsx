"use client"

import React, { useState, useEffect } from 'react'
import { createClient } from '@/lib/supabaseClient'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Image, Upload, Link, X, Check } from 'lucide-react'
import { Textarea } from "@/components/ui/textarea"

interface ImagePickerProps {
  value: string
  onChange: (value: string) => void
  label?: string
  placeholder?: string
}

interface StorageFile {
  name: string
  id: string
  updated_at: string
  created_at: string
  last_accessed_at: string
  metadata: any
}

export function ImagePicker({ value, onChange, label = "Bild", placeholder = "https://exempel.com/bild.jpg" }: ImagePickerProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [storageImages, setStorageImages] = useState<StorageFile[]>([])
  const [loading, setLoading] = useState(false)
  const [selectedImage, setSelectedImage] = useState<string>(value)
  const [activeTab, setActiveTab] = useState<"storage" | "url">("storage")
  const [urlInput, setUrlInput] = useState(value)
  const supabase = createClient()

  // Hämta bilder från storage när komponenten öppnas
  useEffect(() => {
    if (isOpen && activeTab === "storage") {
      fetchStorageImages()
    }
  }, [isOpen, activeTab])

  const fetchStorageImages = async () => {
    setLoading(true)
    try {
      const { data, error } = await supabase.storage
        .from('images')
        .list('', {
          limit: 100,
          offset: 0,
          sortBy: { column: 'created_at', order: 'desc' }
        })

      if (error) {
        console.error('Error fetching images:', error)
        return
      }

      // Filtrera endast bildfiler
      const imageFiles = data?.filter(file => 
        file.name.toLowerCase().match(/\.(jpg|jpeg|png|gif|webp|svg)$/)
      ) || []

      setStorageImages(imageFiles)
    } catch (error) {
      console.error('Error:', error)
    } finally {
      setLoading(false)
    }
  }

  const getImageUrl = (fileName: string) => {
    const { data } = supabase.storage
      .from('images')
      .getPublicUrl(fileName)
    return data.publicUrl
  }

  const handleImageSelect = (fileName: string) => {
    const imageUrl = getImageUrl(fileName)
    setSelectedImage(imageUrl)
  }

  const handleConfirm = () => {
    if (activeTab === "storage") {
      onChange(selectedImage)
    } else {
      onChange(urlInput)
    }
    setIsOpen(false)
  }

  const handleCancel = () => {
    setSelectedImage(value)
    setUrlInput(value)
    setIsOpen(false)
  }

  return (
    <div className="space-y-2">
      <Label className="text-sm font-medium">{label}</Label>
      <div className="flex gap-2">
        <Input 
          value={value} 
          readOnly 
          placeholder={placeholder}
          className="flex-1"
        />
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogTrigger asChild>
            <Button variant="outline" size="sm" type="button">
              <Image className="h-4 w-4 mr-2" />
              Välj bild
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-4xl max-h-[80vh] overflow-hidden">
            <DialogHeader>
              <DialogTitle>Välj bild</DialogTitle>
              <DialogDescription>
                Välj en bild från storage eller ange en URL
              </DialogDescription>
            </DialogHeader>

            <Tabs value={activeTab} onValueChange={(value) => setActiveTab(value as "storage" | "url")} className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="storage" className="flex items-center gap-2">
                  <Upload className="h-4 w-4" />
                  Storage Bilder
                </TabsTrigger>
                <TabsTrigger value="url" className="flex items-center gap-2">
                  <Link className="h-4 w-4" />
                  URL
                </TabsTrigger>
              </TabsList>

              <TabsContent value="storage" className="space-y-4">
                <div className="text-sm text-gray-600">
                  Bilder från Supabase storage bucket "images"
                </div>

                {loading ? (
                  <div className="flex items-center justify-center py-12">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#003366]"></div>
                  </div>
                ) : (
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-h-96 overflow-y-auto p-1">
                    {storageImages.length === 0 ? (
                      <div className="col-span-full text-center py-12 text-gray-500">
                        <Image className="h-12 w-12 mx-auto mb-4 text-gray-300" />
                        <p>Inga bilder hittades i storage</p>
                      </div>
                    ) : (
                      storageImages.map((file) => {
                        const imageUrl = getImageUrl(file.name)
                        const isSelected = selectedImage === imageUrl
                        
                        return (
                          <div 
                            key={file.name}
                            className={`relative border-2 rounded-lg overflow-hidden cursor-pointer transition-all hover:shadow-md ${
                              isSelected ? 'border-[#003366] ring-2 ring-[#003366] ring-opacity-20' : 'border-gray-200 hover:border-gray-300'
                            }`}
                            onClick={() => handleImageSelect(file.name)}
                          >
                            <div className="aspect-square relative">
                              <img 
                                src={imageUrl} 
                                alt={file.name}
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                  (e.target as HTMLImageElement).src = '/placeholder-image.jpg'
                                }}
                              />
                              {isSelected && (
                                <div className="absolute inset-0 bg-[#003366] bg-opacity-20 flex items-center justify-center">
                                  <Check className="h-8 w-8 text-white" />
                                </div>
                              )}
                            </div>
                            <div className="p-2 bg-white">
                              <p className="text-xs text-gray-600 truncate" title={file.name}>
                                {file.name}
                              </p>
                            </div>
                          </div>
                        )
                      })
                    )}
                  </div>
                )}
              </TabsContent>

              <TabsContent value="url" className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="url-input">Bild-URL</Label>
                  <Textarea
                    id="url-input"
                    value={urlInput}
                    onChange={(e) => setUrlInput(e.target.value)}
                    placeholder={placeholder}
                    className="min-h-[80px]"
                  />
                </div>
                
                {urlInput && (
                  <div className="space-y-2">
                    <Label>Förhandsvisning</Label>
                    <div className="border rounded-lg p-4 bg-gray-50">
                      <img 
                        src={urlInput} 
                        alt="Förhandsvisning"
                        className="max-w-full max-h-48 object-contain mx-auto rounded"
                        onError={(e) => {
                          (e.target as HTMLImageElement).style.display = 'none'
                        }}
                        onLoad={(e) => {
                          (e.target as HTMLImageElement).style.display = 'block'
                        }}
                      />
                    </div>
                  </div>
                )}
              </TabsContent>
            </Tabs>

            <div className="flex justify-between pt-4 border-t">
              <Button variant="outline" onClick={handleCancel}>
                <X className="h-4 w-4 mr-2" />
                Avbryt
              </Button>
              <Button 
                onClick={handleConfirm}
                className="bg-[#003366] hover:bg-[#002244]"
                disabled={activeTab === "storage" ? !selectedImage : !urlInput}
              >
                <Check className="h-4 w-4 mr-2" />
                Välj bild
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {value && (
        <div className="mt-2">
          <div className="border rounded-lg p-2 bg-gray-50">
            <img 
              src={value} 
              alt="Vald bild"
              className="max-w-full max-h-32 object-contain mx-auto rounded"
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = 'none'
              }}
            />
          </div>
        </div>
      )}
    </div>
  )
} 