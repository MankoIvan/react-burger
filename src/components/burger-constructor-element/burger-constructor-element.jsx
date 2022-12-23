import React, { useMemo } from 'react'
import { useDispatch } from 'react-redux'
import PropTypes from 'prop-types'
import { ingredientPropTypes } from '../../utils/prop-types'
import styles from './burger-constructor-element.module.scss'
import { DragIcon, ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components'
import { useDrag, useDrop } from 'react-dnd'
import BurgerConstructorPlaceholder from '../burger-constructor-placeholder/burger-constructor-placeholder'
import { switchIngredients } from '../../services/actions/burger-constructor'

const BurgerConstructorElement = ({ ingredient, onRemove, position, index }) => {
  const draggable = ingredient.type !== 'bun'

  const dispatch = useDispatch()

  const handleRemoveIngredient = () => {
    onRemove(ingredient._uuid)
  }

  const onDropHandler = ({ dragIndex }) => {
    dispatch(switchIngredients(dragIndex, index))
  }

  const [{ isDrag }, dragRef] = useDrag({
    type: 'switchIngredient',
    item: { dragIndex: index },
    collect: monitor => ({
      isDrag: monitor.isDragging()
    })
  })

  const [{ isHover }, dropTarget] = useDrop({
    accept: "switchIngredient",
    drop(dragIndex) {
      onDropHandler(dragIndex);
    },
    collect: monitor => ({
      isHover: monitor.isOver(),
    })
  })

  return (
    <div className={styles.ingredient_wrapper} ref={draggable ? dropTarget : undefined}>
      <div
        className={`${styles.ingredient} ${draggable ? styles.draggable : ''} ${isDrag ? styles.dragged : ''} ${isHover ? styles.hovered : ''} `}
        ref={draggable ? dragRef : undefined}>
        {draggable && (
          <DragIcon type="primary" />
        )}
        <ConstructorElement
          type={position}
          text={`${ingredient.name}${position && position === 'top' ? ' (верх)' : ' (низ)'}`}
          price={ingredient.price}
          thumbnail={ingredient.image_mobile}
          handleClose={handleRemoveIngredient}
          isLocked={!draggable}
        />
      </div>
      {isHover && !isDrag && (
        <div className={styles.placeholder}>
          <BurgerConstructorPlaceholder>
            Меняемся местами
          </BurgerConstructorPlaceholder>
        </div>
      )}
    </div>
  )
}

BurgerConstructorElement.propTypes = {
  ingredient: ingredientPropTypes.isRequired,
  onRemove: PropTypes.func.isRequired,
  position: PropTypes.string,
  index: PropTypes.number
}

export default BurgerConstructorElement