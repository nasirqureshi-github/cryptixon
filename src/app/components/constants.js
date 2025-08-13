import { Icon } from "@iconify/react"
export const options = [
  { value: "Medan,IDN", label: "Medan, IDN" },
  { value: "Jakarta, IDN", label: "Jakarta, IDN" },
  { value: "Surabaya, IDN", label: "Surabaya, IDN" },
];

export const cardData=[
  {
      
    icon: "/assets/images/bitcoin.svg",
     lineChart:<Icon icon="mdi:chart-line-variant" width="24" height="24"/>,
    amount: "$984",
    percentage: "45%",
    label: "This week",
    labelcolor:"text-green-500"
  },
  {
   icon:"/assets/images/mshappe.svg",
      amount:"$22,567",
      percentage:"45%",
      lineChart:<Icon icon="mdi:chart-line-variant" width="24" height="24"/>,
      label:"This week",
      labelcolor:"text-green-500"
  },
  {
     icon:"/assets/images/roundedshape.svg",
      amount:"$168,331.09",
      percentage: "45%",
      lineChart:<Icon icon="mdi:chart-line-variant" width="24" height="24" className="rotate-90"/>,
      label:"This week",
      labelcolor:"text-red-500"
  },
   {
    icon: "/assets/images/lshape.svg",
      amount:"$7,784",
      percentage:"45%",
      lineChart:<Icon icon="mdi:chart-line-variant" width="24" height="24" className="rotate-90" />,
      label:"This week",
      labelcolor:"text-red-500",
    }
]

export const cards=[
    { image:"/assets/images/card1.png" },
    { image:"/assets/images/card2.png"},
    { image:"/assets/images/card3.png"},
    { image:"/assets/images/card3.png"},
]
export const clients=[
    {id: 1, name: "Zypher", label: "@Zypher", image:"/assets/images/client1.jpg" },
    {id: 2, name: "Lunox", label: "@Lunox" , image:"/assets/images/client2.jpg" },
    {  id: 3, name: "Drayke", label: "@Drayke", image:"/assets/images/client3.jpg"  },
    { id: 4, name: "Virel", label: "@Virel", image:"/assets/images/client4.jpg" },
     { id: 5, name: "Sorin", label: "@Sorin", image:"/assets/images/client5.jpg" },
      { id: 6, name: "Kael", label: "@Kael",image:"/assets/images/client6.jpg" },
       { id: 7, name: "Nyra", label: "@Nyra" , image:"/assets/images/client7.jpg" },
        {id: 8, name: "Thorne", label: "@Thorne",  image:"/assets/images/client8.jpg" }, 
        {id: 9, name: "Riven", label: "@Riven" , image:"/assets/images/client9.jpg" },
]


export const tabs = [
  {
    value: "Bitcoin",
    title: "Bitcoin",
    icon: "cryptocurrency:btc",
    iconbg: "bg-[#FFAB2D] rounded-full",
    bitCoinType: "BTC",
    discription:
      "Bitcoin is the first and most widely recognized cryptocurrency, launched in 2009 by the pseudonymous creator Satoshi Nakamoto. It operates on a decentralized blockchain network, enabling secure peer-to-peer transactions without intermediaries. Bitcoin is often seen as 'digital gold' due to its limited supply of 21 million coins. It uses proof-of-work mining to validate transactions and maintain network security. Widely adopted worldwide, Bitcoin serves as both a payment method and a store of value.",
  },
  {
    value: "Ethereum",
    title: "Ethereum",
    icon: "cryptocurrency:eth",
    iconbg: "bg-[#7F96EC] rounded-full",
    bitCoinType: "ETH",
    discription:
      "Ethereum is a decentralized platform that enables developers to build and deploy smart contracts and decentralized applications (dApps). It is powered by its native cryptocurrency, Ether (ETH), and introduced the concept of programmable blockchain.",
  },
  {
    value: "Monero",
    title: "Monero",
    icon: "cryptocurrency:xmr",
    iconbg: "bg-[#FC9D67] rounded-full",
    bitCoinType: "XMR",
    discription:
      "Monero is a privacy-focused cryptocurrency that uses advanced cryptographic techniques to ensure transactions are untraceable and confidential. It is popular among users seeking anonymity.",
  },
  {
    value: "Litecoin",
    title: "Litecoin",
    icon: "cryptocurrency:ltc",
    iconbg: "bg-[#374C98] rounded-full",
    bitCoinType: "LTC",
    discription:
      "Litecoin is a peer-to-peer cryptocurrency created as a lighter and faster alternative to Bitcoin, offering quicker transaction confirmations and a different hashing algorithm.",
  },
];