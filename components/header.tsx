import Sticky from './sticky/sticky'
import styled from '@emotion/styled'

const color = '#fff'
const height = '60px'
const HeaderBar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  background-color: ${color};
  height: ${height};
  padding: 10px 20px;
  top: 0;
  border-bottom: 1px solid #efefef;
`

export default function Header() {
  return (
    // <Sticky top={60}>
    // <div>Header</div>
    // </Sticky>
    <HeaderBar>Header</HeaderBar>
  )
}
