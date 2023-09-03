import { getBillboard } from "@/actions/get-billboard";
import { getProducts } from "@/actions/get-products";
import Container from "@/components/Container"
import Billboard from "@/components/billboard/Billboard"

export const revalidate = 0;

const HomePage = async () => {
  const bilboard = await getBillboard('1e5c2884-2138-4df8-bb1b-b0229aea606e');
  const products = await getProducts({ isFeatured: true });
  return (
    <Container>
      <div className="space-y-10 pb-10 ">
        <Billboard data={bilboard} />
      </div>
    </Container>
  )
}


export default HomePage
