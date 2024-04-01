import Facebook from './Components/Facebook/Facebook';
import './style.scss';
import { createRoot } from 'react-dom/client';
// Block Name
function FrontEnd({attributes}) {
	return (
		<>
			<Facebook attributes={attributes}/>
    </>
  );
}

const container = document.querySelectorAll('.wp-block-fbpg-hello');
container?.forEach(ele => {
	const attributes = JSON.parse(ele.dataset.attributes);
	const root = createRoot(ele);
	root.render(<FrontEnd attributes={attributes} />);
	ele?.removeAttribute("data-attributes")
})