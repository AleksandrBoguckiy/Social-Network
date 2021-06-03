import Avatar from '../../../../assets/images/Avatar.jpg';
import s from './Post.module.css'
import Heart from '../../../../assets/images/Heart.png'

type PostType = {
    post: string
    likesCount: number
}
export const Post: React.FC<PostType> = (props) => {
    return (
        <div className={s.posts}>
            <div className={s.item}>
                <img src={Avatar} alt='AvatarPicture'/>
                <div className={s.post}>
                    {props.post}
                </div>
                <div className={s.likes}>
                    <img src={Heart} alt='Like'/>
                    {props.likesCount}
                </div>
            </div>
        </div>
    )
}