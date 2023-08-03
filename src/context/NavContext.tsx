import { JSX, Dispatch, SetStateAction, ReactNode, useState, createContext } from 'react'

type NavContextType = {
	currentNav: string
	setCurrentNav: Dispatch<SetStateAction<string>>
}

type Props = {
	children: ReactNode
}

export const NavContext = createContext({} as NavContextType)

export default function NavContextProvider({ children }: Props): JSX.Element {
	const [currentNav, setCurrentNav] = useState<string>('')

	return <NavContext.Provider value={{ currentNav, setCurrentNav }}>{children}</NavContext.Provider>
}
