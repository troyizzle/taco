class CreateReviews < ActiveRecord::Migration[7.0]
  def change
    create_table :reviews do |t|
      t.string :name, null: false
      t.float :rating, null: false

      t.timestamps
    end
  end
end
