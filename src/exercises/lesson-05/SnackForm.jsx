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

  const nameError = getNameError();
  const ratingError = getRatingError();

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

    if (!validateName() || !validateRating()) {
      setTouched({ name: true, rating: true });
      return;
    }

    if (isEditing) {
      updateSnack(editingSnack.id, name.trim(), rating);
    } else {
      addSnack(name.trim(), rating);
      setName('');
      setRating('');
      setTouched({ name: false, rating: false });
    }
  }

  function validateName() {
    return name.trim() !== '';
  }

  function validateRating() {
    return rating !== '';
  }

  // name should not be empty after trim
  function getNameError() {
    return touched.name && !validateName() ? 'Snack name is required' : '';
  }

  function getRatingError() {
    return touched.rating && !validateRating() ? 'Please select a rating' : '';
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
        {nameError && <div className={styles.error}>{nameError}</div>}
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
        {ratingError && <div className={styles.error}>{ratingError}</div>}
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
