import './App.scss';
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
    <div className="app">
      {data.post.map((post, index) => (
        <div key={index} className={`post post-${index % 5}`}>
          <div className="profile">
            <img
              className={`profile_icon color-${index % 5}`}
              src={image_files[index % image_files.length]}
              alt={`icon-${index + 1}`}
            />
            <div>
              <p className={`profile_name color-${index % 5}`}>{post.name}</p>
              <p className={`profile_status color-${index % 5}`}>{post.status}</p>
            </div>
          </div>
          <p className={`brief_opinion color-${index % 5}`}>{post.brief_opinion}</p>
          <p className={`detailed_opinion color-${index % 5}`}>{post.detailed_opinion}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
