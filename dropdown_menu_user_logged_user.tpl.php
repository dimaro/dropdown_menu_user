<div class="user">
  <div class="user-image">
    <?php if (isset($user['image'])): ?>
      <?php print($user['image']); ?>
    <?php endif; ?>
  </div>
  <div class="user-name">
    <?php if (isset($user['name'])): ?>
      <span><?php print($user['name']); ?></span>
    <?php endif; ?>
  </div>
</div>