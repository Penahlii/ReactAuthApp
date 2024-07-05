import { Form, Input, Select, Checkbox, Button } from "./SignUpForm.styles";

const SignUpForm = () => {
  return (
    <Form>
      <Input type="text" placeholder="Username" />
      <Input type="email" placeholder="Email" />
      <Input type="password" placeholder="Password" />
      <Input type="password" placeholder="Confirm Password" />
      <Select>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="other">Other</option>
      </Select>
      <Checkbox type="checkbox" id="terms" />
      <label htmlFor="terms">I accept the Terms and Conditions</label>
      <Button type="submit">Sign Up</Button>
    </Form>
  );
};

export default SignUpForm;
