import * as Yup from 'yup';

export const validationSchemaInputs = Yup.object({
	name: Yup.string().required('Please enter name'),
	unitPrice: Yup.number().min(0).required('Please enter Unit Price only number'),
	unitsInStock: Yup.number().min(0).required('Please enter Unit Price only number'),
});
