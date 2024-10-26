import blog from './blog.txt';

export default function Home() {

  fetch(blog)
 .then(r => r.text())
 .then(text => {
  console.log('text decoded:', text);
});

  return(
  <>

  </>
  )
}