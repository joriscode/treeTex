/** @constructor */
ScalaJS.c.scala_collection_TraversableLike$$anonfun$scala$collection$TraversableLike$$sliceInternal$1 = (function() {
  ScalaJS.c.scala_runtime_AbstractFunction0$mcV$sp.call(this);
  this.$$outer$3 = null;
  this.from$1$f = 0;
  this.until$1$f = 0;
  this.b$9$f = null;
  this.i$1$f = null
});
ScalaJS.c.scala_collection_TraversableLike$$anonfun$scala$collection$TraversableLike$$sliceInternal$1.prototype = new ScalaJS.inheritable.scala_runtime_AbstractFunction0$mcV$sp();
ScalaJS.c.scala_collection_TraversableLike$$anonfun$scala$collection$TraversableLike$$sliceInternal$1.prototype.constructor = ScalaJS.c.scala_collection_TraversableLike$$anonfun$scala$collection$TraversableLike$$sliceInternal$1;
ScalaJS.c.scala_collection_TraversableLike$$anonfun$scala$collection$TraversableLike$$sliceInternal$1.prototype.apply__V = (function() {
  this.apply$mcV$sp__V()
});
ScalaJS.c.scala_collection_TraversableLike$$anonfun$scala$collection$TraversableLike$$sliceInternal$1.prototype.apply$mcV$sp__V = (function() {
  this.$$outer$3.seq__Lscala_collection_TraversableOnce().foreach__Lscala_Function1__V(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(arg$outer) {
    return (function(x) {
      if ((arg$outer.i$1$f.elem$1 >= arg$outer.from$1$f)) {
        arg$outer.b$9$f.$$plus$eq__O__Lscala_collection_mutable_Builder(x)
      } else {
        ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit()
      };
      arg$outer.i$1$f.elem$1 = (arg$outer.i$1$f.elem$1 + 1);
      if ((arg$outer.i$1$f.elem$1 >= arg$outer.until$1$f)) {
        ScalaJS.modules.scala_collection_Traversable().breaks__Lscala_util_control_Breaks().$break__Lscala_Nothing()
      };
      return ScalaJS.bV(undefined)
    })
  })(this)))
});
ScalaJS.c.scala_collection_TraversableLike$$anonfun$scala$collection$TraversableLike$$sliceInternal$1.prototype.apply__O = (function() {
  this.apply__V();
  return ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit()
});
ScalaJS.c.scala_collection_TraversableLike$$anonfun$scala$collection$TraversableLike$$sliceInternal$1.prototype.init___Lscala_collection_TraversableLike__I__I__Lscala_collection_mutable_Builder__Lscala_runtime_IntRef = (function($$outer, from$1, until$1, b$9, i$1) {
  if (($$outer === null)) {
    throw new ScalaJS.c.java_lang_NullPointerException().init___()
  } else {
    this.$$outer$3 = $$outer
  };
  this.from$1$f = from$1;
  this.until$1$f = until$1;
  this.b$9$f = b$9;
  this.i$1$f = i$1;
  ScalaJS.c.scala_runtime_AbstractFunction0$mcV$sp.prototype.init___.call(this);
  return this
});
/** @constructor */
ScalaJS.inheritable.scala_collection_TraversableLike$$anonfun$scala$collection$TraversableLike$$sliceInternal$1 = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_TraversableLike$$anonfun$scala$collection$TraversableLike$$sliceInternal$1.prototype = ScalaJS.c.scala_collection_TraversableLike$$anonfun$scala$collection$TraversableLike$$sliceInternal$1.prototype;
ScalaJS.is.scala_collection_TraversableLike$$anonfun$scala$collection$TraversableLike$$sliceInternal$1 = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_TraversableLike$$anonfun$scala$collection$TraversableLike$$sliceInternal$1)))
});
ScalaJS.as.scala_collection_TraversableLike$$anonfun$scala$collection$TraversableLike$$sliceInternal$1 = (function(obj) {
  if ((ScalaJS.is.scala_collection_TraversableLike$$anonfun$scala$collection$TraversableLike$$sliceInternal$1(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.TraversableLike$$anonfun$scala$collection$TraversableLike$$sliceInternal$1")
  }
});
ScalaJS.isArrayOf.scala_collection_TraversableLike$$anonfun$scala$collection$TraversableLike$$sliceInternal$1 = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_TraversableLike$$anonfun$scala$collection$TraversableLike$$sliceInternal$1)))
});
ScalaJS.asArrayOf.scala_collection_TraversableLike$$anonfun$scala$collection$TraversableLike$$sliceInternal$1 = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_TraversableLike$$anonfun$scala$collection$TraversableLike$$sliceInternal$1(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.TraversableLike$$anonfun$scala$collection$TraversableLike$$sliceInternal$1;", depth)
  }
});
ScalaJS.data.scala_collection_TraversableLike$$anonfun$scala$collection$TraversableLike$$sliceInternal$1 = new ScalaJS.ClassTypeData({
  scala_collection_TraversableLike$$anonfun$scala$collection$TraversableLike$$sliceInternal$1: 0
}, false, "scala.collection.TraversableLike$$anonfun$scala$collection$TraversableLike$$sliceInternal$1", ScalaJS.data.scala_runtime_AbstractFunction0$mcV$sp, {
  scala_collection_TraversableLike$$anonfun$scala$collection$TraversableLike$$sliceInternal$1: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_runtime_AbstractFunction0$mcV$sp: 1,
  scala_Function0$mcV$sp: 1,
  scala_runtime_AbstractFunction0: 1,
  scala_Function0: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_TraversableLike$$anonfun$scala$collection$TraversableLike$$sliceInternal$1.prototype.$classData = ScalaJS.data.scala_collection_TraversableLike$$anonfun$scala$collection$TraversableLike$$sliceInternal$1;
//@ sourceMappingURL=TraversableLike$$anonfun$scala$collection$TraversableLike$$sliceInternal$1.js.map
