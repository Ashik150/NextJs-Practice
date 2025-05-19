import Button from '@/app/components/Button'
import Image from 'next/image'
import thumb from "@/public/images/thumb.jpeg"   

export default function Mission() {
    return (
        <main className="mt-10">
            <div>This is mission page in about</div>
            <Image src = {thumb} alt = "Thumb Image" />
            <Button/>
        </main>
    )
}
