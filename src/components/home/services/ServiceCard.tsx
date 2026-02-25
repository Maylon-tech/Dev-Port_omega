import Image from "next/image"

interface ServiceCardProps {
    icon: string,
    name: string,
    description: string
}

const ServiceCard = ({ icon, name, description }: ServiceCardProps) => {
  return (
    <div>
        <Image src={icon} alt="Service-icon" width={60} height={60} />
        <h3 className="my-4 text-xl md:text-2xl font-bold text-gray-200">{name}</h3>
        <p className="text-gray-300">{description}</p>
    </div>
  )
}

export default ServiceCard
