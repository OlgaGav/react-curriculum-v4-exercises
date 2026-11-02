import styles from './SnackForm.module.css';
import { useState, useEffect } from 'react';

export default function SnackForm({
  addSnack,
  editingSnack,
  cancelEdit,
  updateSnack,
  className,
}) {
  const [name, setName] = useState('');
  const [rating, setRating] = useState('');
  const [touched, setTouched] = useState({ name: false, rating: false });

  useEffect(() => {
    if (editingSnack) {
      // prefill form if there is data in eidtingSnack when user click on Edit
      setName(editingSnack.name);
      setRating(editingSnack.rating);
    } else {
      setName('');
      setRating('');
    }
    setTouched({ name: false, rating: false });
  }, [editingSnack]);

  const isEditing = Boolean(editingSnack);

  function handleSubmit(e) {
    e.preventDefault();
    setTouched({ name: false, rating: false });

    if (isEditing) {
      updateSnack(editingSnack.id, name, rating);
    } else {
      addSnack(name, rating);
      setName('');
      setRating('');
      setTouched({ name: false, rating: false });
    }
  }

  function validateName() {
    return true;
  }

  function validateRating() {
    return true;
  }

  // name should not be empty after trim
  function getNameError() {
    return 'Snack name is required';
  }

  function getRatingError() {
    return 'Please select a rating';
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={`${styles.form} ${className || ''}`}
    >
      <h3 className={styles['form-title']}>
        {isEditing ? '✏️ Edit Snack' : '➕ Add Snack'}
      </h3>

      <div className={styles['field-container']}>
        <label className={styles['field-label']}>Name:</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          onFocus={() => {
            setTouched((prev) => ({ ...prev, name: true }));
          }}
          className={styles['field-input']}
          placeholder="Enter snack name"
        />
      </div>

      <div className={styles['field-container']}>
        <label className={styles['field-label']}>Rating:</label>
        <input
          type="number"
          name="rating"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
          onFocus={() => {
            setTouched((prev) => ({ ...prev, rating: true }));
          }}
          min="1"
          max="5"
          className={styles['field-input']}
          placeholder="Rate 1-5"
        />
      </div>

      <div className={styles['button-container']}>
        <button
          type="submit"
          className={`${styles.button} ${styles['submit-button']}`}
        >
          {isEditing ? 'Save' : 'Add'}
        </button>

        {isEditing && (
          <button
            type="button"
            onClick={cancelEdit}
            className={`${styles.button} ${styles['cancel-button']}`}
          >
            Cancel
          </button>
        )}
      </div>
    </form>
  );
}
