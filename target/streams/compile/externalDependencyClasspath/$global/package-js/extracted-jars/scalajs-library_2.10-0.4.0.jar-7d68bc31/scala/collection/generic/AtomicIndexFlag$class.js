ScalaJS.impls.scala_collection_generic_AtomicIndexFlag$class__indexFlag__Lscala_collection_generic_AtomicIndexFlag__I = (function($$this) {
  return $$this.scala$collection$generic$AtomicIndexFlag$$intflag__Ljava_util_concurrent_atomic_AtomicInteger().get__I()
});
ScalaJS.impls.scala_collection_generic_AtomicIndexFlag$class__setIndexFlag__Lscala_collection_generic_AtomicIndexFlag__I__V = (function($$this, f) {
  $$this.scala$collection$generic$AtomicIndexFlag$$intflag__Ljava_util_concurrent_atomic_AtomicInteger().set__I__V(f)
});
ScalaJS.impls.scala_collection_generic_AtomicIndexFlag$class__setIndexFlagIfGreater__Lscala_collection_generic_AtomicIndexFlag__I__V = (function($$this, f) {
  var loop = true;
  do {
    var old = $$this.scala$collection$generic$AtomicIndexFlag$$intflag__Ljava_util_concurrent_atomic_AtomicInteger().get__I();
    if ((f <= old)) {
      loop = false
    } else {
      if ($$this.scala$collection$generic$AtomicIndexFlag$$intflag__Ljava_util_concurrent_atomic_AtomicInteger().compareAndSet__I__I__Z(old, f)) {
        loop = false
      }
    }
  } while (loop)
});
ScalaJS.impls.scala_collection_generic_AtomicIndexFlag$class__setIndexFlagIfLesser__Lscala_collection_generic_AtomicIndexFlag__I__V = (function($$this, f) {
  var loop = true;
  do {
    var old = $$this.scala$collection$generic$AtomicIndexFlag$$intflag__Ljava_util_concurrent_atomic_AtomicInteger().get__I();
    if ((f >= old)) {
      loop = false
    } else {
      if ($$this.scala$collection$generic$AtomicIndexFlag$$intflag__Ljava_util_concurrent_atomic_AtomicInteger().compareAndSet__I__I__Z(old, f)) {
        loop = false
      }
    }
  } while (loop)
});
ScalaJS.impls.scala_collection_generic_AtomicIndexFlag$class__$init$__Lscala_collection_generic_AtomicIndexFlag__V = (function($$this) {
  $$this.scala$collection$generic$AtomicIndexFlag$$undsetter$und$scala$collection$generic$AtomicIndexFlag$$intflag$und$eq__Ljava_util_concurrent_atomic_AtomicInteger__V(new ScalaJS.c.java_util_concurrent_atomic_AtomicInteger().init___I(-1))
});
//@ sourceMappingURL=AtomicIndexFlag$class.js.map
