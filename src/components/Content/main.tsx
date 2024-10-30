import News from "./News/main"
import ContentWrapper from "./ContentWrapper"
import { post } from "@/assets/images"
import PaginationComponent from "@/components/Pagination/main"
const Content = () => {

    const postImages = [post.post1.src]
    return (
        <>
            <ContentWrapper>
                <News images={postImages} />
            </ContentWrapper>

            <div className="w-full h-full flex items-center justify-center">

                <div className="w-[370px] h-full mr-[15px]">
                    <ContentWrapper>
                        <News images={postImages} />
                    </ContentWrapper>
                </div>
                <div className="w-[370px] h-full ml-[15px]">
                    <ContentWrapper>
                        <News images={postImages} />
                    </ContentWrapper>
                </div>
            </div>

            <div className="w-full h-full flex items-center justify-center">

                <div className="w-[370px] h-full mt-8 mr-[15px]">
                    <ContentWrapper>
                        <News images={postImages} />
                    </ContentWrapper>
                </div>

                <div className="flex flex-col w-[370px] h-[510px] ml-[15px]">
                    <div className="w-full h-full flex flex-col justify-center items-center bg-backgroundPrimary-color mb-4"><News /></div>
                    <div className="w-full h-full flex flex-col justify-center items-center bg-backgroundPrimary-color mt-4"><News /></div>
                </div>

            </div>

            <div className="mt-8">
                <ContentWrapper>
                    <News images={postImages} />
                </ContentWrapper>
            </div>

            <div className="w-full h-full flex items-center justify-center my-8">
                <PaginationComponent />
            </div>



        </>
    )
}

export default Content