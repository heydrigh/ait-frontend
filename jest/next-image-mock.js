/* eslint-disable */
import * as nextImage from 'next/image'

jest.mock('next/image', () => ({
	__esModule: true,
	default: ({ src, alt, fill, ...props }) => {
		if (typeof src === 'object') {
			src = src.src
		}
		return <img src={src} alt={alt} {...props} />
	},
}))
