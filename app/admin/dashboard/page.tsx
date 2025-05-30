'use client'

import { useEffect, useState, FormEvent } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabaseClient'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog"
import { User } from '@supabase/supabase-js'
import { Trash2, Edit, PlusCircle, Copy } from 'lucide-react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"

// Definiera en typ för era produkter, matcha med databastabellen
interface Product {
  id: string;
  created_at: string;
  name: string;
  category?: string | null;
  description?: string | null;
  features?: string[] | null; // Ändrat till string[] för enklare hantering i formulär
  price?: number | null;
  image_url?: string | null;
  status?: string | null;
  model_category?: "Toppmodell" | "Mellanmodell" | "Instegsmodell" | null;
  product_category?: string | null;
}

const categoryOptions = [
  { value: "ny-farg-a3", label: "Nytt, Färgkopiatorer/Färgskrivare A3" },
  { value: "ny-farg-a4", label: "Nytt, Färgkopiatorer/Färgskrivare A4" },
  { value: "beg-farg-a3", label: "Beg, Färgkopiatorer/Färgskrivare A3" },
  { value: "beg-farg-a4", label: "Beg, Färgkopiatorer/Färgskrivare A4" },
  { value: "nya-kopiatorer", label: "Nya Kopiatorer (Generell)" },
  { value: "beg-kopiatorer", label: "Begagnade Kopiatorer (Generell)" },
  { value: "fynd", label: "Fyndhörna" },
  { value: "toner", label: "Toner & Bläck" },
  { value: "forbrukning", label: "Förbrukning, Trummor, m.m." }
];

const modelCategoryOptions = [
  { value: "Toppmodell", label: "Toppmodell" },
  { value: "Mellanmodell", label: "Mellanmodell" },
  { value: "Instegsmodell", label: "Instegsmodell" }
];

const skickOptions = [
  { value: "Ny", label: "Ny" },
  { value: "Begagnad", label: "Begagnad" }
];

const initialFormData: Omit<Product, 'id' | 'created_at'> = {
  name: '',
  category: '',
  description: '',
  features: [],
  price: 0,
  image_url: '',
  status: 'Ny',
  model_category: null,
  product_category: null,
};

export default function AdminDashboardPage() {
  const router = useRouter()
  const supabase = createClient()
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)
  const [products, setProducts] = useState<Product[]>([])
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([])
  const [filters, setFilters] = useState({
    category: 'all',
    status: 'all',
    modelCategory: 'all',
    search: ''
  })
  const [isAddModalOpen, setIsAddModalOpen] = useState(false)
  const [isEditModalOpen, setIsEditModalOpen] = useState(false)
  const [addFormData, setAddFormData] = useState<Omit<Product, 'id' | 'created_at'>>(initialFormData)
  const [editFormData, setEditFormData] = useState<Omit<Product, 'created_at'>>(initialFormData)
  const [formError, setFormError] = useState<string | null>(null)
  const [featuresInput, setFeaturesInput] = useState('')
  const [editFeaturesInput, setEditFeaturesInput] = useState('')
  const [isAlertOpen, setIsAlertOpen] = useState(false)
  const [productToDelete, setProductToDelete] = useState<Product | null>(null)
  const [isCopyModalOpen, setIsCopyModalOpen] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const [copyFormData, setCopyFormData] = useState<{
    category: string;
    model_category: "Toppmodell" | "Mellanmodell" | "Instegsmodell" | null;
    product_category: string | null;
  }>({
    category: '',
    model_category: null,
    product_category: null
  })

  useEffect(() => {
    async function getUserAndProfile() {
      const { data: { session }, error: sessionError } = await supabase.auth.getSession()

      if (sessionError || !session) {
        console.error('Session error or no session:', sessionError)
        router.push('/admin/login')
        return
      }

      setUser(session.user)

      const { data: profile, error: profileError } = await supabase
        .from('profiles')
        .select('role')
        .eq('id', session.user.id)
        .single()

      if (profileError || !profile || profile.role !== 'admin') {
        console.warn('User is not admin, redirecting.')
        await supabase.auth.signOut()
        router.push('/admin/login')
        return
      }
      // Om allt är ok, ladda produkter
      await fetchProducts()
      setLoading(false)
    }
    getUserAndProfile()
  }, [router, supabase])

  const fetchProducts = async () => {
    try {
      const { data, error } = await supabase
        .from('products')
        .select('*')
        .order('name', { ascending: true })
      
      if (error) throw error
      setProducts(data || [])
      setFilteredProducts(data || [])
    } catch (error) {
      console.error('Error fetching products:', error)
      setProducts([])
      setFilteredProducts([])
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, isEdit: boolean = false) => {
    const { name, value } = e.target;
    if (isEdit) {
      setEditFormData(prev => ({ ...prev, [name]: name === 'price' ? (value === '' ? null : parseFloat(value)) : value }));
    } else {
      setAddFormData(prev => ({ ...prev, [name]: name === 'price' ? (value === '' ? null : parseFloat(value)) : value }));
    }
  };

  const handleCategoryChange = (value: string, isEdit: boolean = false) => {
    if (isEdit) {
      setEditFormData(prev => ({ ...prev, category: value }));
    } else {
      setAddFormData(prev => ({ ...prev, category: value }));
    }
  };

  const handleFeaturesChange = (e: React.ChangeEvent<HTMLInputElement>, isEdit: boolean = false) => {
    if (isEdit) {
      setEditFeaturesInput(e.target.value);
      const featuresArray = e.target.value.split(',').map(feature => feature.trim()).filter(feature => feature);
      setEditFormData(prev => ({ ...prev, features: featuresArray }));
    } else {
      setFeaturesInput(e.target.value);
      const featuresArray = e.target.value.split(',').map(feature => feature.trim()).filter(feature => feature);
      setAddFormData(prev => ({ ...prev, features: featuresArray }));
    }
  };

  const handleModelCategoryChange = (value: string, isEdit: boolean = false) => {
    if (isEdit) {
      setEditFormData(prev => ({ ...prev, model_category: value as "Toppmodell" | "Mellanmodell" | "Instegsmodell" | null }));
    } else {
      setAddFormData(prev => ({ ...prev, model_category: value as "Toppmodell" | "Mellanmodell" | "Instegsmodell" | null }));
    }
  };

  const handleProductCategoryChange = (value: string, isEdit: boolean = false) => {
    if (isEdit) {
      setEditFormData(prev => ({ ...prev, product_category: value }));
    } else {
      setAddFormData(prev => ({ ...prev, product_category: value }));
    }
  };

  const handleAddProduct = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormError(null);
    if (!addFormData.name || !addFormData.category) {
      setFormError("Namn och kategori är obligatoriska.");
      return;
    }

    try {
      const { error } = await supabase.from('products').insert([{
        ...addFormData,
        price: addFormData.price === null ? undefined : addFormData.price // Hantera null-värde för pris
      }]);
      if (error) throw error;
      await fetchProducts(); // Hämta produkter igen för att visa den nya
      setIsAddModalOpen(false); // Stäng modalen
      setAddFormData(initialFormData); // Återställ formulär
      setFeaturesInput(''); // Återställ feature-input
    } catch (error: any) {
      console.error("Error adding product:", error);
      setFormError(error.message || "Kunde inte lägga till produkt.");
    }
  };

  const handleEditProduct = (product: Product) => {
    setEditFormData({
      id: product.id,
      name: product.name,
      category: product.category || '',
      description: product.description || '',
      features: product.features || [],
      price: product.price || null,
      image_url: product.image_url || '',
      status: product.status || 'Ny',
      model_category: product.model_category,
      product_category: product.product_category,
    });
    setEditFeaturesInput(product.features?.join(', ') || '');
    setIsEditModalOpen(true);
  };

  const handleUpdateProduct = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormError(null);
    
    if (!editFormData.name || !editFormData.category) {
      setFormError("Namn och kategori är obligatoriska.");
      return;
    }

    try {
      const { error } = await supabase
        .from('products')
        .update({
          name: editFormData.name,
          category: editFormData.category,
          description: editFormData.description,
          features: editFormData.features,
          price: editFormData.price === null ? undefined : editFormData.price,
          image_url: editFormData.image_url,
          status: editFormData.status,
          model_category: editFormData.model_category,
          product_category: editFormData.product_category,
        })
        .eq('id', editFormData.id);

      if (error) throw error;
      
      await fetchProducts();
      setIsEditModalOpen(false);
      setEditFormData(initialFormData);
      setEditFeaturesInput('');
    } catch (error: any) {
      console.error("Error updating product:", error);
      setFormError(error.message || "Kunde inte uppdatera produkten.");
    }
  };

  const handleDeleteProduct = async (product: Product) => {
    setProductToDelete(product);
    setIsAlertOpen(true);
  };

  const confirmDeleteProduct = async () => {
    if (!productToDelete) return;

    try {
      const { error } = await supabase.from('products').delete().eq('id', productToDelete.id);
      if (error) throw error;
      await fetchProducts();
      setIsAlertOpen(false);
      setProductToDelete(null);
    } catch (error: any) {
      console.error("Error deleting product:", error);
      setFormError("Kunde inte ta bort produkt: " + error.message);
      setIsAlertOpen(false);
      setProductToDelete(null);
    }
  };

  const handleCopyProduct = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormError(null);
    
    if (!selectedProduct || !copyFormData.category) {
      setFormError("Kategori är obligatorisk.");
      return;
    }

    try {
      const newProduct = {
        name: selectedProduct.name,
        description: selectedProduct.description,
        image_url: selectedProduct.image_url,
        status: selectedProduct.status,
        features: selectedProduct.features,
        price: selectedProduct.price,
        category: copyFormData.category,
        model_category: copyFormData.model_category,
        product_category: copyFormData.product_category
      };

      const { error } = await supabase
        .from('products')
        .insert([newProduct]);

      if (error) throw error;
      
      await fetchProducts();
      setIsCopyModalOpen(false);
      setSelectedProduct(null);
      setCopyFormData({
        category: '',
        model_category: null,
        product_category: null
      });
    } catch (error: any) {
      console.error("Error copying product:", error);
      setFormError(error.message || "Kunde inte kopiera produkten.");
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut()
    router.push('/admin/login')
  }

  const handleFilterChange = (key: string, value: string) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  // Applicera filter på produkterna
  useEffect(() => {
    let result = [...products];
    
    // Filtrera efter kategori
    if (filters.category !== 'all') {
      result = result.filter(product => product.category === filters.category);
    }
    
    // Filtrera efter status
    if (filters.status !== 'all') {
      result = result.filter(product => product.status === filters.status);
    }
    
    // Filtrera efter modellkategori
    if (filters.modelCategory !== 'all') {
      result = result.filter(product => product.model_category === filters.modelCategory);
    }

    // Sökfiltrering
    if (filters.search) {
      const searchLower = filters.search.toLowerCase();
      result = result.filter(product => 
        product.name.toLowerCase().includes(searchLower) ||
        product.description?.toLowerCase().includes(searchLower) ||
        product.product_category?.toLowerCase().includes(searchLower)
      );
    }
    
    setFilteredProducts(result);
  }, [filters, products]);

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p>Laddar adminpanelen...</p>
        {/* Du kan lägga till en spinner här */}
      </div>
    )
  }

  if (!user) {
    // Detta bör inte hända om useEffect-logiken är korrekt, men som en fallback
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p>Omdirigerar till inloggning...</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 p-2 sm:p-4 md:p-8">
      {/* Mobile-optimized header */}
      <header className="mb-4 sm:mb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between rounded-lg bg-white p-4 sm:p-6 shadow-sm">
        <div className="mb-3 sm:mb-0">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#003366]">Admin Dashboard</h1>
          <p className="text-sm text-gray-600 mt-1">Hantera produkter och innehåll</p>
        </div>
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 w-full sm:w-auto">
          <span className="text-xs sm:text-sm text-gray-600 truncate max-w-[200px]">
            Inloggad som: {user.email}
          </span>
          <Button onClick={handleLogout} variant="outline" size="sm" className="w-full sm:w-auto">
            Logga ut
          </Button>
        </div>
      </header>

      <section className="rounded-lg bg-white p-4 sm:p-6 shadow-sm">
        <div className="mb-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 sm:mb-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-[#003366] mb-2 sm:mb-0">
              Produkthantering
            </h2>
            <Dialog open={isAddModalOpen} onOpenChange={setIsAddModalOpen}>
              <DialogTrigger asChild>
                <Button className="bg-[#003366] hover:bg-[#002244] w-full sm:w-auto">
                  <PlusCircle className="mr-2 h-4 w-4" /> 
                  <span className="hidden xs:inline">Lägg till Ny Produkt</span>
                  <span className="xs:hidden">Ny Produkt</span>
                </Button>
              </DialogTrigger>
              <DialogContent className="w-[95vw] max-w-[525px] max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle>Lägg till Ny Produkt</DialogTitle>
                  <DialogDescription>
                    Fyll i detaljerna för den nya produkten.
                  </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleAddProduct} className="grid gap-4 py-4">
                  <div className="grid grid-cols-1 sm:grid-cols-4 items-start sm:items-center gap-2 sm:gap-4">
                    <Label htmlFor="name" className="sm:text-right font-medium">
                      Namn*
                    </Label>
                    <Input 
                      id="name" 
                      name="name" 
                      value={addFormData.name} 
                      onChange={(e) => handleInputChange(e)} 
                      className="sm:col-span-3" 
                      placeholder="Produktnamn" 
                    />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-4 items-start sm:items-center gap-2 sm:gap-4">
                    <Label htmlFor="category" className="sm:text-right font-medium">
                      Kategori*
                    </Label>
                    <Select
                      value={addFormData.category || ''}
                      onValueChange={(value) => handleCategoryChange(value)}
                      name="category"
                    >
                      <SelectTrigger className="sm:col-span-3">
                        <SelectValue placeholder="Välj en kategori" />
                      </SelectTrigger>
                      <SelectContent>
                        {categoryOptions.map(option => (
                          <SelectItem key={option.value} value={option.value}>
                            {option.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-4 items-start sm:items-center gap-2 sm:gap-4">
                    <Label htmlFor="model_category" className="sm:text-right font-medium">
                      Modellkategori
                    </Label>
                    <Select
                      value={addFormData.model_category || ''}
                      onValueChange={(value) => handleModelCategoryChange(value)}
                      name="model_category"
                    >
                      <SelectTrigger className="sm:col-span-3">
                        <SelectValue placeholder="Välj en modellkategori" />
                      </SelectTrigger>
                      <SelectContent>
                        {modelCategoryOptions.map(option => (
                          <SelectItem key={option.value} value={option.value}>
                            {option.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-4 items-start sm:items-center gap-2 sm:gap-4">
                    <Label htmlFor="description" className="sm:text-right font-medium">
                      Beskrivning
                    </Label>
                    <Textarea 
                      id="description" 
                      name="description" 
                      value={addFormData.description || ''} 
                      onChange={(e) => handleInputChange(e)} 
                      className="sm:col-span-3 min-h-[80px]" 
                      placeholder="Produktbeskrivning" 
                    />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-4 items-start sm:items-center gap-2 sm:gap-4">
                    <Label htmlFor="features" className="sm:text-right font-medium">
                      Funktioner
                    </Label>
                    <Input 
                      id="features"
                      name="features"
                      value={featuresInput} 
                      onChange={(e) => handleFeaturesChange(e)} 
                      className="sm:col-span-3" 
                      placeholder="Komma-separerad, t.ex. Färg, Dubbelsidig"
                    />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-4 items-start sm:items-center gap-2 sm:gap-4">
                    <Label htmlFor="price" className="sm:text-right font-medium">
                      Pris (kr)
                    </Label>
                    <Input 
                      id="price" 
                      name="price" 
                      type="number" 
                      value={addFormData.price === null ? '' : addFormData.price} 
                      onChange={(e) => handleInputChange(e)} 
                      className="sm:col-span-3" 
                      placeholder="T.ex. 10000" 
                    />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-4 items-start sm:items-center gap-2 sm:gap-4">
                    <Label htmlFor="image_url" className="sm:text-right font-medium">
                      Bild-URL
                    </Label>
                    <Input 
                      id="image_url" 
                      name="image_url" 
                      value={addFormData.image_url || ''} 
                      onChange={(e) => handleInputChange(e)} 
                      className="sm:col-span-3" 
                      placeholder="https://exempel.com/bild.jpg" 
                    />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-4 items-start sm:items-center gap-2 sm:gap-4">
                    <Label htmlFor="status" className="sm:text-right font-medium">
                      Skick
                    </Label>
                    <Select
                      value={addFormData.status || 'Ny'}
                      onValueChange={(value) => handleInputChange({ target: { name: 'status', value } })}
                      name="status"
                    >
                      <SelectTrigger className="sm:col-span-3">
                        <SelectValue placeholder="Välj skick" />
                      </SelectTrigger>
                      <SelectContent>
                        {skickOptions.map(option => (
                          <SelectItem key={option.value} value={option.value}>
                            {option.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-4 items-start sm:items-center gap-2 sm:gap-4">
                    <Label htmlFor="product_category" className="sm:text-right font-medium">
                      Produktkategori
                    </Label>
                    <Input 
                      id="product_category" 
                      name="product_category" 
                      value={addFormData.product_category || ''} 
                      onChange={(e) => handleProductCategoryChange(e.target.value)} 
                      className="sm:col-span-3" 
                      placeholder="T.ex. Färgkopiator" 
                    />
                  </div>
                  {formError && <p className="text-sm text-red-600 text-center bg-red-50 p-2 rounded">{formError}</p>}
                  <DialogFooter className="flex flex-col sm:flex-row gap-2 sm:gap-0">
                    <DialogClose asChild>
                      <Button type="button" variant="outline" className="w-full sm:w-auto">Avbryt</Button>
                    </DialogClose>
                    <Button type="submit" className="bg-[#003366] hover:bg-[#002244] w-full sm:w-auto">Lägg till Produkt</Button>
                  </DialogFooter>
                </form>
              </DialogContent>
            </Dialog>
          </div>
          
          {/* Mobile-optimized filters */}
          <div className="space-y-3 sm:space-y-0 sm:grid sm:grid-cols-2 lg:grid-cols-4 sm:gap-4 mb-6">
            <div>
              <Label className="text-sm font-medium text-gray-700 mb-1 block">Sök</Label>
              <Input
                placeholder="Sök produkt..."
                value={filters.search}
                onChange={(e) => handleFilterChange('search', e.target.value)}
                className="w-full"
              />
            </div>
            <div>
              <Label className="text-sm font-medium text-gray-700 mb-1 block">Kategori</Label>
              <Select
                value={filters.category}
                onValueChange={(value) => handleFilterChange('category', value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Välj kategori" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Alla kategorier</SelectItem>
                  {categoryOptions.map(option => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label className="text-sm font-medium text-gray-700 mb-1 block">Status</Label>
              <Select
                value={filters.status}
                onValueChange={(value) => handleFilterChange('status', value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Välj status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Alla status</SelectItem>
                  {skickOptions.map(option => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label className="text-sm font-medium text-gray-700 mb-1 block">Modellkategori</Label>
              <Select
                value={filters.modelCategory}
                onValueChange={(value) => handleFilterChange('modelCategory', value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Välj modellkategori" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Alla modellkategorier</SelectItem>
                  {modelCategoryOptions.map(option => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* Products display - Cards for mobile, table for desktop */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-12">
            <div className="mx-auto h-12 w-12 text-gray-400 mb-4">
              <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2 2v-5m16 0h-2M4 13h2m13-8V4a1 1 0 00-1-1H6a1 1 0 00-1 1v1m16 0V4a1 1 0 00-1-1H6a1 1 0 00-1 1v1" />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">Inga produkter hittades</h3>
            <p className="text-gray-500 mb-4">
              {products.length === 0 ? "Lägg till din första produkt för att komma igång!" : "Inga produkter matchar dina filter."}
            </p>
            {products.length === 0 && (
              <Button 
                onClick={() => setIsAddModalOpen(true)}
                className="bg-[#003366] hover:bg-[#002244]"
              >
                <PlusCircle className="mr-2 h-4 w-4" />
                Lägg till första produkten
              </Button>
            )}
          </div>
        ) : (
          <>
            {/* Mobile card view */}
            <div className="block lg:hidden space-y-4">
              {filteredProducts.map((product) => (
                <div key={product.id} className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1 min-w-0">
                      <h3 className="text-sm font-medium text-gray-900 truncate">{product.name}</h3>
                      <p className="text-xs text-gray-500 mt-1">{product.category || 'Ingen kategori'}</p>
                    </div>
                    {product.image_url && (
                      <img 
                        src={product.image_url} 
                        alt={product.name} 
                        className="h-12 w-12 rounded-md object-cover ml-3 flex-shrink-0"
                      />
                    )}
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3 mb-4 text-xs">
                    <div>
                      <span className="text-gray-500">Modellkategori:</span>
                      <p className="font-medium">{product.model_category || '-'}</p>
                    </div>
                    <div>
                      <span className="text-gray-500">Pris:</span>
                      <p className="font-medium">{product.price ? `${product.price} kr` : '-'}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span 
                      className={`inline-flex rounded-full px-2 py-1 text-xs font-semibold 
                                ${product.status === 'Ny' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}
                    >
                      {product.status || 'Okänd'}
                    </span>
                    
                    <div className="flex space-x-1">
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        onClick={() => {
                          setSelectedProduct(product);
                          setIsCopyModalOpen(true);
                        }} 
                        className="text-[#003366] hover:text-[#002244] p-2"
                      >
                        <Copy className="h-4 w-4"/>
                      </Button>
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        onClick={() => handleEditProduct(product)} 
                        className="text-[#003366] hover:text-[#002244] p-2"
                      >
                        <Edit className="h-4 w-4"/>
                      </Button>
                      <Button 
                        variant="destructive" 
                        size="sm" 
                        onClick={() => handleDeleteProduct(product)}
                        className="p-2"
                      >
                        <Trash2 className="h-4 w-4"/>
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Desktop table view */}
            <div className="hidden lg:block overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Namn</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Kategori</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Modellkategori</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Pris</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Status</th>
                    <th scope="col" className="px-6 py-3 text-right text-xs font-medium uppercase tracking-wider text-gray-500">Åtgärder</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {filteredProducts.map((product) => (
                    <tr key={product.id}>
                      <td className="whitespace-nowrap px-6 py-4">
                        <div className="text-sm font-medium text-gray-900">{product.name}</div>
                        {product.image_url && <img src={product.image_url} alt={product.name} className="h-10 w-10 rounded-md object-cover mt-1"/>}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">{product.category || '-'}</td>
                      <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">{product.model_category || '-'}</td>
                      <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">{product.price ? `${product.price} kr` : '-'}</td>
                      <td className="whitespace-nowrap px-6 py-4">
                        <span 
                          className={`inline-flex rounded-full px-2 text-xs font-semibold leading-5 
                                    ${product.status === 'Ny' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}
                        >
                          {product.status || 'Okänd'}
                        </span>
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-right text-sm font-medium">
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          onClick={() => {
                            setSelectedProduct(product);
                            setIsCopyModalOpen(true);
                          }} 
                          className="text-[#003366] hover:text-[#002244] mr-2"
                        >
                          <Copy className="h-4 w-4 mr-1"/> Kopiera
                        </Button>
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          onClick={() => handleEditProduct(product)} 
                          className="text-[#003366] hover:text-[#002244] mr-2"
                        >
                          <Edit className="h-4 w-4 mr-1"/> Redigera
                        </Button>
                        <Button 
                          variant="destructive" 
                          size="sm" 
                          onClick={() => handleDeleteProduct(product)}
                        >
                          <Trash2 className="h-4 w-4 mr-1"/> Ta bort
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}
      </section>

      <AlertDialog open={isAlertOpen} onOpenChange={setIsAlertOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Är du helt säker?</AlertDialogTitle>
            <AlertDialogDescription>
              Detta kommer permanent att ta bort produkten "{productToDelete?.name || 'den valda produkten'}". Denna åtgärd kan inte ångras.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel onClick={() => setProductToDelete(null)}>Avbryt</AlertDialogCancel>
            <AlertDialogAction onClick={confirmDeleteProduct} className="bg-red-600 hover:bg-red-700">
              Ja, ta bort produkten
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      {/* Add Edit Product Dialog */}
      <Dialog open={isEditModalOpen} onOpenChange={setIsEditModalOpen}>
        <DialogContent className="w-[95vw] max-w-[525px] max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Redigera Produkt</DialogTitle>
            <DialogDescription>
              Uppdatera detaljerna för produkten.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleUpdateProduct} className="grid gap-4 py-4">
            <div className="grid grid-cols-1 sm:grid-cols-4 items-start sm:items-center gap-2 sm:gap-4">
              <Label htmlFor="edit-name" className="sm:text-right font-medium">
                Namn*
              </Label>
              <Input 
                id="edit-name" 
                name="name" 
                value={editFormData.name} 
                onChange={(e) => handleInputChange(e, true)} 
                className="sm:col-span-3" 
                placeholder="Produktnamn" 
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-4 items-start sm:items-center gap-2 sm:gap-4">
              <Label htmlFor="edit-category" className="sm:text-right font-medium">
                Kategori*
              </Label>
              <Select
                value={editFormData.category || ''}
                onValueChange={(value) => handleCategoryChange(value, true)}
                name="category"
              >
                <SelectTrigger className="sm:col-span-3">
                  <SelectValue placeholder="Välj en kategori" />
                </SelectTrigger>
                <SelectContent>
                  {categoryOptions.map(option => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-4 items-start sm:items-center gap-2 sm:gap-4">
              <Label htmlFor="edit-model_category" className="sm:text-right font-medium">
                Modellkategori
              </Label>
              <Select
                value={editFormData.model_category || ''}
                onValueChange={(value) => handleModelCategoryChange(value, true)}
                name="model_category"
              >
                <SelectTrigger className="sm:col-span-3">
                  <SelectValue placeholder="Välj en modellkategori" />
                </SelectTrigger>
                <SelectContent>
                  {modelCategoryOptions.map(option => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-4 items-start sm:items-center gap-2 sm:gap-4">
              <Label htmlFor="edit-description" className="sm:text-right font-medium">
                Beskrivning
              </Label>
              <Textarea 
                id="edit-description" 
                name="description" 
                value={editFormData.description || ''} 
                onChange={(e) => handleInputChange(e, true)} 
                className="sm:col-span-3 min-h-[80px]" 
                placeholder="Produktbeskrivning" 
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-4 items-start sm:items-center gap-2 sm:gap-4">
              <Label htmlFor="edit-features" className="sm:text-right font-medium">
                Funktioner
              </Label>
              <Input 
                id="edit-features"
                name="features"
                value={editFeaturesInput} 
                onChange={(e) => handleFeaturesChange(e, true)} 
                className="sm:col-span-3" 
                placeholder="Komma-separerad, t.ex. Färg, Dubbelsidig"
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-4 items-start sm:items-center gap-2 sm:gap-4">
              <Label htmlFor="edit-price" className="sm:text-right font-medium">
                Pris (kr)
              </Label>
              <Input 
                id="edit-price" 
                name="price" 
                type="number" 
                value={editFormData.price === null ? '' : editFormData.price} 
                onChange={(e) => handleInputChange(e, true)} 
                className="sm:col-span-3" 
                placeholder="T.ex. 10000" 
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-4 items-start sm:items-center gap-2 sm:gap-4">
              <Label htmlFor="edit-image_url" className="sm:text-right font-medium">
                Bild-URL
              </Label>
              <Input 
                id="edit-image_url" 
                name="image_url" 
                value={editFormData.image_url || ''} 
                onChange={(e) => handleInputChange(e, true)} 
                className="sm:col-span-3" 
                placeholder="https://exempel.com/bild.jpg" 
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-4 items-start sm:items-center gap-2 sm:gap-4">
              <Label htmlFor="edit-status" className="sm:text-right font-medium">
                Skick
              </Label>
              <Select
                value={editFormData.status || 'Ny'}
                onValueChange={(value) => handleInputChange({ target: { name: 'status', value } }, true)}
                name="status"
              >
                <SelectTrigger className="sm:col-span-3">
                  <SelectValue placeholder="Välj skick" />
                </SelectTrigger>
                <SelectContent>
                  {skickOptions.map(option => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-4 items-start sm:items-center gap-2 sm:gap-4">
              <Label htmlFor="edit-product_category" className="sm:text-right font-medium">
                Produktkategori
              </Label>
              <Input 
                id="edit-product_category" 
                name="product_category" 
                value={editFormData.product_category || ''} 
                onChange={(e) => handleProductCategoryChange(e.target.value)} 
                className="sm:col-span-3" 
                placeholder="T.ex. Färgkopiator" 
              />
            </div>
            {formError && <p className="text-sm text-red-600 text-center bg-red-50 p-2 rounded">{formError}</p>}
            <DialogFooter className="flex flex-col sm:flex-row gap-2 sm:gap-0">
              <DialogClose asChild>
                <Button type="button" variant="outline" className="w-full sm:w-auto">Avbryt</Button>
              </DialogClose>
              <Button type="submit" className="bg-[#003366] hover:bg-[#002244] w-full sm:w-auto">Spara Ändringar</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>

      {/* Lägg till Dialog för kopiering */}
      <Dialog open={isCopyModalOpen} onOpenChange={setIsCopyModalOpen}>
        <DialogContent className="w-[95vw] max-w-[525px] max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Kopiera Produkt till Ny Kategori</DialogTitle>
            <DialogDescription>
              Välj vilken kategori du vill kopiera produkten till.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleCopyProduct} className="grid gap-4 py-4">
            <div className="grid grid-cols-1 sm:grid-cols-4 items-start sm:items-center gap-2 sm:gap-4">
              <Label htmlFor="copy-category" className="sm:text-right font-medium">
                Kategori*
              </Label>
              <Select
                value={copyFormData.category}
                onValueChange={(value) => setCopyFormData(prev => ({ ...prev, category: value }))}
                name="category"
              >
                <SelectTrigger className="sm:col-span-3">
                  <SelectValue placeholder="Välj en kategori" />
                </SelectTrigger>
                <SelectContent>
                  {categoryOptions.map(option => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-4 items-start sm:items-center gap-2 sm:gap-4">
              <Label htmlFor="copy-model_category" className="sm:text-right font-medium">
                Modellkategori
              </Label>
              <Select
                value={copyFormData.model_category || ''}
                onValueChange={(value) => setCopyFormData(prev => ({ ...prev, model_category: value as "Toppmodell" | "Mellanmodell" | "Instegsmodell" | null }))}
                name="model_category"
              >
                <SelectTrigger className="sm:col-span-3">
                  <SelectValue placeholder="Välj en modellkategori" />
                </SelectTrigger>
                <SelectContent>
                  {modelCategoryOptions.map(option => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-4 items-start sm:items-center gap-2 sm:gap-4">
              <Label htmlFor="copy-product_category" className="sm:text-right font-medium">
                Produktkategori
              </Label>
              <Input 
                id="copy-product_category" 
                name="product_category" 
                value={copyFormData.product_category || ''} 
                onChange={(e) => setCopyFormData(prev => ({ ...prev, product_category: e.target.value }))} 
                className="sm:col-span-3" 
                placeholder="T.ex. Färgkopiator" 
              />
            </div>
            {formError && <p className="text-sm text-red-600 text-center bg-red-50 p-2 rounded">{formError}</p>}
            <DialogFooter className="flex flex-col sm:flex-row gap-2 sm:gap-0">
              <Button type="button" variant="outline" onClick={() => setIsCopyModalOpen(false)} className="w-full sm:w-auto">
                Avbryt
              </Button>
              <Button type="submit" className="bg-[#003366] hover:bg-[#002244] w-full sm:w-auto">
                Kopiera Produkt
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  )
} 