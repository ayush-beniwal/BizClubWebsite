import '../Css/Gallery.css'
import eve1 from '../EventImages/madhavendra.png'
import GalleryImages from '../Components/GalleryImages';
import party from '../EventImages/partyima.jpeg'
import prod from '../EventImages/ProdBreak.png'

const Gallery = () => {
    return (
        <>
        <div className="GalleryHead">
        <span className="text-[#D01919]">The Business Club </span> <span className="space"></span>
        is not just the place where we learn <br></br>but also a place where we <span className="space"></span>
         <span className="text-[#D01919]"> found our family!</span>

        </div>
        <GalleryImages img1={party} img2={prod} img3={prod}/>
        <GalleryImages img1={party} img2={prod} img3={party}/>
        <GalleryImages img1={party} img2={prod} img3={prod}/>
        <GalleryImages img1={party} img2={prod} img3={party}/>
        <GalleryImages img1={party} img2={prod} img3={prod}/>
        <GalleryImages img1={party} img2={prod} img3={party}/>        
        </>
    )
};

export default Gallery; 