import './App.css';
import pattern_bg from './assets/images/bg-pattern-quotation.svg';
import image_daniel from './assets/images/image-daniel.jpg';
import image_jonathan from './assets/images/image-jonathan.jpg';
import image_jeanette from './assets/images/image-jeanette.jpg';
import image_patrick from './assets/images/image-patrick.jpg';
import image_kira from './assets/images/image-kira.jpg';

function App({data}) {
  const image_files = [
    image_daniel,
    image_jonathan,
    image_jeanette,
    image_patrick,
    image_kira
  ]

  return (
    <div id="postContainer">
      {data.post.map((post, index) => (
        <div key={index} className={`post post-${index % 2}`}>
          <img
            src={image_files[index % image_files.length]}
            alt={`icon-${index + 1}`}
          />
          <h2>{post.name}</h2>
          <p>{post.status}</p>
          <p>{post.brief_opinion}</p>
          <p>{post.detailed_opinion}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
