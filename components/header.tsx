import Sticky from './sticky/sticky';

export default function Header() {
  return (
    <Sticky top={60}>
      <div>Header</div>
    </Sticky>
  )
}
