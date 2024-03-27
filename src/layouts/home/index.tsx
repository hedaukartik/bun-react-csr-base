import { Link } from 'react-router-dom';
import { useForm, type SubmitHandler } from 'react-hook-form';

import './index.scss';

type Inputs = {
  example: string;
  exampleRequired: string;
};

function Home() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <div>
      <h1 className="title">
        Welcome to <span>Bun React CSR App</span>
      </h1>
      <Link to={`contacts`}>View contacts</Link>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* register your input into the hook by invoking the "register" function */}
        <input defaultValue="test" {...register('example')} />

        {/* include validation with required or other standard HTML validation rules */}
        <input {...register('exampleRequired', { required: true })} />
        {/* errors will return when field validation fails  */}
        {errors.exampleRequired && <span>This field is required</span>}

        <input type="submit" />
      </form>
    </div>
  );
}

export default Home;
