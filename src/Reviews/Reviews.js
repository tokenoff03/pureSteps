import r from "./Reviews.module.css";


function Reviews() {
  return (
    <div className={r.Reviews}>
        <h3 className={r.h3}>Отзывы о нас</h3>
        <div className={r.reviews_images}>
            <img src="./image/Instagram_story.png" alt="story"/>
            <img src="./image/Instagram_story2.png" alt="story"/>
            <img src="./image/Instagram_story3.png" alt="story"/>
            <img src="./image/Instagram_story4.png" alt="story"/>
            <img src="./image/Instagram_story3.png" alt="story"/>
        </div>
    </div>
  );
}

export default Reviews;