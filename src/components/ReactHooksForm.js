import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Data from '../validators/Data';
import { validationSchemaInputs } from '../validators/ValidatorYup';

function ReactHooksForm() {
	const formOptions = { resolver: yupResolver(validationSchemaInputs) };

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm(formOptions);
	const onSubmit = (data) => {
		Data(data);
		console.log(data);
		reset();
	};

	return (
		<div>
			<h1>React Hook Form</h1>
			<form onSubmit={handleSubmit(onSubmit)}>
				<div>
					<label htmlFor="name">Name</label>
					<div>
						<input type="text" defaultValue="" {...register('name')} />
						<div>{errors.name?.message}</div>
					</div>
				</div>

				<div>
					<label htmlFor="unitPrice">Unit Price</label>
					<div>
						<input type="number" defaultValue="" {...register('unitPrice')} />
						<div>{errors.unitPrice?.message && `unitPrice must be a number type`}</div>
					</div>
				</div>

				<div>
					<label htmlFor="unitsInStock">Units In Stock</label>
					<div>
						<input type="number" defaultValue="" {...register('unitsInStock')} />
						<div>{errors.unitsInStock?.message && `unitsInStock must be a number type`}</div>
					</div>
				</div>

				<button type="submit"> Submit </button>
			</form>
		</div>
	);
}

export default ReactHooksForm;
