import ReactDOM from 'react-dom'
import {
    AdoptButton,
  CloseButton,
  Column,
  CustomTextarea,
  Form,
  Info,
  Modal,
  Overlay
} from './styles'
import { Cat } from '../../Cat'

interface AdoptionFormModalProps {
  show: boolean
  closeModal: () => void
  cat: Cat
}

const AdoptionFormModal = ({
  show,
  closeModal,
  cat
}: AdoptionFormModalProps) => {
  const modalElement = document.getElementById('modal')
  if (!modalElement) return null
  if (!show) return null

  return ReactDOM.createPortal(
    <>
      <Overlay onClick={closeModal}></Overlay>
      <Modal>
        <Form>
          <Column>
            <h3>CAT INFO</h3>
            <Info>
              <label>Name</label>
              <input type="text" required value={cat.name} disabled />
            </Info>
            <Info>
              <label>Race</label>
              <input type="text" required value={cat.race} disabled />
            </Info>
            <Info>
              <label>Location</label>
              <input type="text" required value={cat.location} disabled />
            </Info>
            <Info>
              <label>Age</label>
              <input type="text" required value={cat.age} disabled />
            </Info>
            <Info>
              <label>Color</label>
              <input type="text" required value={cat.color} disabled />
            </Info>
            <Info>
              <label>Weight</label>
              <input type="text" required value={cat.weight} disabled />
            </Info>
            <Info>
              <label>Adoption Fee</label>
              <input type="text" required value={cat.price} disabled />
            </Info>
          </Column>

          <Column>
            <h3>CLIENT INFO</h3>
            <Info>
              <label>Name</label>
              <input type="text" required placeholder="Name"/>
            </Info>

            <Info>
              <label>Cellphone</label>
              <input type="number" required placeholder="Cellphone" />
            </Info>

            <Info>
              <label>Email</label>
              <input type="email" required placeholder="Email" />
            </Info>

            <Info>
              <label>Address</label>
              <input type="text" required placeholder="Address" />
            </Info>

            <Info>
              <label>How many pets do you have?</label>
              <input type="number" required />
            </Info>
            <Info>
              <label>Reason to adopt</label>
              <CustomTextarea
                name="reason"
                id="reason"
                placeholder="Reason to adopt"
              ></CustomTextarea>
            </Info>
          </Column>
        </Form>
        <AdoptButton>SENT REQUEST TO ADOPT</AdoptButton>

        <CloseButton onClick={closeModal}>
          <svg
            clip-rule="evenodd"
            fill-rule="evenodd"
            stroke-linejoin="round"
            stroke-miterlimit="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="m12 10.93 5.719-5.72c.146-.146.339-.219.531-.219.404 0 .75.324.75.749 0 .193-.073.385-.219.532l-5.72 5.719 5.719 5.719c.147.147.22.339.22.531 0 .427-.349.75-.75.75-.192 0-.385-.073-.531-.219l-5.719-5.719-5.719 5.719c-.146.146-.339.219-.531.219-.401 0-.75-.323-.75-.75 0-.192.073-.384.22-.531l5.719-5.719-5.72-5.719c-.146-.147-.219-.339-.219-.532 0-.425.346-.749.75-.749.192 0 .385.073.531.219z" />
          </svg>
        </CloseButton>
      </Modal>
    </>,
    modalElement
  )
}

export default AdoptionFormModal
