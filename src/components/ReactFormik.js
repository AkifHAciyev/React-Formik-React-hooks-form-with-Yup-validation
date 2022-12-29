import { Formik, Field, Form, ErrorMessage } from 'formik';
import React from 'react';
import Data from '../validators/Data';
import { validationSchemaInputs } from '../validators/ValidatorYup';

function ReactFormik() {
	return (
		<Formik
			initialValues={{ name: '', unitPrice: '', unitsInStock: '' }}
			validationSchema={validationSchemaInputs}
			onSubmit={(values, { resetForm }) => {
				Data(values);
				resetForm({ values: '' });
			}}
		>
			<div className="form">
				<h1>React Formik</h1>
				<Form>
					<div>
						<label htmlFor="name">Name</label>
						<div>
							<Field name="name" type="text" />
							<ErrorMessage component="div" name="name" />
						</div>
					</div>

					<div>
						<label htmlFor="unitPrice">Unit Price</label>
						<div>
							<Field name="unitPrice" type="number" />
							<ErrorMessage component="div" name="unitPrice" />
						</div>
					</div>

					<div>
						<label htmlFor="unitsInStock">Units In Stock</label>
						<div>
							<Field name="unitsInStock" type="number" />
							<ErrorMessage component="div" name="unitsInStock" />
						</div>
					</div>

					<button type="submit">Submit</button>
				</Form>
			</div>
		</Formik>
	);
}

export default ReactFormik;
