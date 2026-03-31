import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card"
import Link from "next/link";
import Image from 'next/image'
 
const socialLinks = [
  { name: "Discord", url: "https://discord.com/users/597360430830059520" },
  { name: "Telegram", url: "https://t.me/khaomi" },
  { name: "Bluesky", url: "https://bsky.app/profile/khaomi.bsky.social" },
  { name: "X", url: "https://x.com/KhaomiAvali" },
  { name: "Linktree", url: "https://linktr.ee/Khaomi" },
]

export function InfoCard() {
  return (
    <Card className="min-w-xl">
      <CardHeader>
        <CardTitle>Khaomi</CardTitle>
        {/* <CardDescription>An Avali currently residing on Earth, in Thailand</CardDescription> */}
      </CardHeader>
      <CardContent>
        <div className="flex gap-3">
          <Image
            src="/khaomi.png"
            width={128}
            height={128}
            alt="Khaomi"
            className="rounded-md object-cover"
          />
          <div className="flex flex-col">
            <div>An Avali currently residing on Earth, in Thailand</div>
            <p>Website is HEAVILY WIP</p>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <ul className="flex gap-3">
          {socialLinks.map((link) => (
            <li key={link.name}>
              <Link
                href={link.url}
                target="_blank _self"
                rel="noopener noreferrer"
                className="text-blue-500 transition-colors hover:text-blue-700"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </CardFooter>
    </Card>
  )
}
