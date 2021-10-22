import { MODAL } from '@shared/constants/actions';
import { atom } from 'recoil';

const modalState = atom<boolean>({
	key: MODAL,
	default: false,
});

export { modalState };
