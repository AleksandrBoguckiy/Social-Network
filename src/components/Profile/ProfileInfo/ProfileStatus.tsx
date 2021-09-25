import s from "./ProfileInfo.module.css";
import React, {ChangeEvent, KeyboardEvent, useState} from "react";

type ProfileStatusPropsType = {
    status: string
    updateStatus: (status: string) => void
}
export const ProfileStatus: React.FC<ProfileStatusPropsType> = React.memo((props) => {

        let [editMode, setEditMode] = useState<boolean>(false)
        let [status, setStatus] = useState<string>(props.status)

        const activateEditMode = () => {
            setEditMode(true)
        }

        const deactivateEditMode = () => {
            status ? props.updateStatus(status) : setStatus(status)
            setEditMode(false)
        }

        const onChangeStatus = (e: ChangeEvent<HTMLInputElement>) => {
            setStatus(e.currentTarget.value)
        }

        const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
            if (e.key === 'Enter') {
                deactivateEditMode();
            }
        }

        return (
            <div className={s.status}>
                {
                    editMode
                        ? <div>
                            <input className={s.edit_status} onBlur={deactivateEditMode} onKeyPress={onKeyPressHandler}
                                   onChange={onChangeStatus} type='text' value={status} autoFocus/>
                        </div>
                        : <div>
                            <span onDoubleClick={activateEditMode}>{props.status || '-----'}</span>
                        </div>
                }
            </div>
        )
    }
)