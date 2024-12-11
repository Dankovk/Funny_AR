const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
]
// const url = 'https://lab.geen.ee/face/';
const url = "https://dankov.vercel.app/";

export default function Example() {
  const params = new URLSearchParams(window.location.search);
  const embedUrl = params.get('embedUrl') || url;
  return (
			<iframe
				src={embedUrl}
				title="Interactive spline scene + live HTML (forked)"
				allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
				sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
				style={{
					width: "100%",
					height: "100%",
				}}
			/>
		);
}
