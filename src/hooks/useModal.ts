import { useRecoilState } from 'recoil';
import { modalState } from '@atoms/index';
import { Dispatch, SetStateAction } from 'react';

interface ReturnType {
	value: boolean;
	setValue: Dispatch<SetStateAction<boolean>>;
	setTrue: () => void;
	setFalse: () => void;
	toggle: () => void;
}

const useModal = (): ReturnType => {
	const [value, setValue] = useRecoilState(modalState);

	const setTrue = () => setValue(true);
	const setFalse = () => setValue(false);
	const toggle = () => setValue((val) => !val);

	return { value, setValue, setTrue, setFalse, toggle };
};

export default useModal;
