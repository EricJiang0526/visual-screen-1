import { nanoid } from 'nanoid'

const generateId = (length = 10) => {
	const id = nanoid(length)
	return id
}

export default generateId