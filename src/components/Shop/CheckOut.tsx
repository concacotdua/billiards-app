import FormCheckOut from "./FormsCheckOut/FormCheckOut"
interface checkProps {
    checkbox?: React.ReactNode;
}

const CheckOut = ({ checkbox }: checkProps) => {
    return (

        <FormCheckOut checkbox={checkbox} />
    )
}

export default CheckOut