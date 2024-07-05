import { Form, Input, Checkbox, Button } from "./SignInForm.styles";

const SignInForm = () => {
  return (
    <Form>
      <Input type="text" placeholder="Username" />
      <Input type="password" placeholder="Password" />
      <Checkbox type="checkbox" id="rememberMe" />
      <label htmlFor="rememberMe">Remember me</label>
      <Button type="submit">Sign In</Button>
    </Form>
  );
};

export default SignInForm;
