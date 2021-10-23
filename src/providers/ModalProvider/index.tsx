import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import type { FC, ReactElement } from 'react';
import { childrenProps } from '@shared/interfaces';
import useModal from '@hooks/useModal';
import { firstTransitionChild, secondTransitionChild } from './utils';

const ModalProvider: FC = ({ children }: childrenProps): ReactElement => {
	const { value: isOpen, setFalse: hide } = useModal();

	return (
		<>
			<Transition appear show={isOpen} as={Fragment}>
				<Dialog
					as="div"
					className="fixed inset-0 z-10 overflow-y-auto"
					onClose={hide}
				>
					<div className="min-h-screen px-4 text-center">
						<Dialog.Overlay className="fixed inset-0 bg-black opacity-40" />
						<Transition.Child as={Fragment} {...firstTransitionChild}>
							<Dialog.Overlay className="fixed inset-0" />
						</Transition.Child>
						<span
							className="inline-block h-screen align-middle"
							aria-hidden="true"
						>
							&#8203;
						</span>
						<Transition.Child as={Fragment} {...secondTransitionChild}>
							{children}
						</Transition.Child>
					</div>
				</Dialog>
			</Transition>
		</>
	);
};

export default ModalProvider;
