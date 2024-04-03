import Button from "../Button/Button";


export default function Home() {
  return (
   <main className="flex flex-wrap sm:flex-nowrap max-w-full m-auto justify-between items-center h-full p-auto ">
    <div className="flex flex-col gap-9 m-auto p-8">
      <h1 className=" font-extrabold leading-[60px] lg:leading-[72px] text-6xl lg:text-[72px] max-w-[600px] "> YOUR FEET DESERVE THE BEST</h1>
      <p className=" font-semibold text-gray-500 max-w-[480px]">YOUR FEET DESERVE THE BEST AND WE&apos;RE HERE TO HELP YOU WITH OUR SHOES. YOUR FEET DESERVE THE BEST AND WE&apos; HERE TO HELP YOU WITH OUR 
        SHOES. </p>
        <div className="flex flex-wrap justify-normal items-center  gap-10 text-sm">
          <a href="https://www.nike.com/in/t/air-pegasus-89-g-nrg-golf-shoes-gtddTT/FN6912-100" rel="noreferrer" target="_blank">
        <Button>Shop Now</Button>
          </a>
          <Button className=" text-black border rounded-xl bg-transparent hover:bg-orange-300 hover:text-white">Catagory</Button>
        </div>
        <div>
          <p className=" text-sm mb-2">Also Available On</p>
          <div className="flex gap-4">
            <a href="https://amazon.in/NIKE-10-White-Black-Star-Blue-Green-STRIKE-DV4022-103-9UK/dp/B0CSK9RC25/ref=sr_1_17?crid=1H70WB6JQ746N&dib=eyJ2IjoiMSJ9.2rffI6Oa10oABAQzkIZwhN1nYWules9sNtyZ2o8xnVzL0M5uC6yczYaKbxm5C9IRUi6Fe37OmMiJtaj4DZ2ZFUb3Rgwrh_8ynN-lqfIupR3HAxOSAjKycJ1mkPFMwwT98-LzeGRji57Ib9RRK4Kqu3gSdN0gDDF16kEUx--G8Py7UOobyBAc4xY8lHMPbDUyONelHmk8D5XInL6pWeSTeSbQEAizz7zXzRKS0DutTFWV401Rlavtp7g5TF0I_UjByJK_VWhU418hyqEzQdV30Ml6-pzXWL4B4k8v_pZC91U.8ftaCozqeJVPTA_njyZbRc8Wg0AKA4e32QW_CcdHri8&dib_tag=se&keywords=nike+shoes+for+men&qid=1712167984&sprefix=nike+%2Caps%2C355&sr=8-17" rel="noreferrer" target="_blank">
<img src="/assets/amazon.png" alt="amezon"  />
            </a>
            <a href="https://www.flipkart.com/nike-juniper-trail-2-gore-tex-running-shoes-men/p/itm301ba10c944c2?pid=SHOGX9P8YUMZNACF&lid=LSTSHOGX9P8YUMZNACFQH1NSI&marketplace=FLIPKART&q=nike+shoes+men&store=osp%2Fcil%2F1cu&srno=s_1_27&otracker=AS_QueryStore_OrganicAutoSuggest_1_7_na_na_na&otracker1=AS_QueryStore_OrganicAutoSuggest_1_7_na_na_na&fm=search-autosuggest&iid=en_S4D2gyuGXWsC5x4AOL6ZrbWQV1h20n_a1FtLYTXULr1SqgKVn0zpRCjOrWiKp0OYsoSS7N_j3Du1W43B5v3vXlhWlg14bXFG9tZ2S67Bqg0%3D&ppt=sp&ppn=sp&ssid=zru2e9enfk0000001712167872161&qH=23f9008bfda1a900" rel="noreferrer" target="_blank" >
            <img src="/assets/flipkart.png" alt="flipkart" />
            </a>
          </div>
        </div>
    </div>
    <div className=" pt-20 max-w-full">
      <img src="/assets/shoe_image.png" alt="shoe" />
    </div>
   </main>
  )
}
