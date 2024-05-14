import Card from "@/image-components/card"
import { CreateImageButton } from "@/kendaraan_components/button"
import { getImages } from "@/lib/kendaraan/actions";


const HomeImage = async () => {
  const images = await getImages();
  console.log(images)

  return (
    <div className="max-w-md mx-auto mt-5">
      <h1 className="text-2xl text-center mb-2">Upload Image </h1>
      <CreateImageButton />
      <div>
        {images.map((item)=> (
          <Card key={item.image_id} data={item} />

        ))}
        
      </div>

    </div>
  )
}

export default HomeImage