import r from "./Reviews.module.css";


function Reviews() {
  return (
    <div className={r.Reviews} id="reviews">
        <h3 className={r.h3}>Отзывы о нас</h3>
        <div className={r.reviews_images}>
            <a href="https://www.instagram.com/stories/highlights/17957414420440335/" target="_blank"><img src="./image/Instagram_story.png" alt="story"/></a>
            <a href="https://www.instagram.com/stories/highlights/17957414420440335/" target="_blank"><img src="./image/Instagram_story2.png" alt="story"/></a>
            <a href="https://www.instagram.com/stories/highlights/17957414420440335/" target="_blank"><img src="./image/Instagram_story3.png" alt="story"/></a>
            <a href="https://www.instagram.com/stories/highlights/17957414420440335/" target="_blank"><img src="./image/Instagram_story4.png" alt="story"/></a>
            <a href="https://www.instagram.com/stories/highlights/17957414420440335/" target="_blank"><img src="./image/Instagram_story3.png" alt="story"/></a>
        </div>
    </div>
  );
}

export default Reviews;