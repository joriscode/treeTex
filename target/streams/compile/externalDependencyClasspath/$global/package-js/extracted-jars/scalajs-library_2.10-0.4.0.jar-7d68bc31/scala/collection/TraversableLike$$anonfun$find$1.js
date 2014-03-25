/** @constructor */
ScalaJS.c.scala_collection_TraversableLike$$anonfun$find$1 = (function() {
  ScalaJS.c.scala_runtime_AbstractFunction0$mcV$sp.call(this);
  this.$$outer$3 = null;
  this.result$4$f = null;
  this.p$6$f = null
});
ScalaJS.c.scala_collection_TraversableLike$$anonfun$find$1.prototype = new ScalaJS.inheritable.scala_runtime_AbstractFunction0$mcV$sp();
ScalaJS.c.scala_collection_TraversableLike$$anonfun$find$1.prototype.constructor = ScalaJS.c.scala_collection_TraversableLike$$anonfun$find$1;
ScalaJS.c.scala_collection_TraversableLike$$anonfun$find$1.prototype.apply__V = (function() {
  this.apply$mcV$sp__V()
});
ScalaJS.c.scala_collection_TraversableLike$$anonfun$find$1.prototype.apply$mcV$sp__V = (function() {
  this.$$outer$3.foreach__Lscala_Function1__V(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(arg$outer) {
    return (function(x) {
      if (ScalaJS.uZ(arg$outer.p$6$f.apply__O__O(x))) {
        arg$outer.result$4$f.elem$1 = new ScalaJS.c.scala_Some().init___O(x);
        ScalaJS.modules.scala_collection_Traversable().breaks__Lscala_util_control_Breaks().$break__Lscala_Nothing()
      };
      return ScalaJS.bV(undefined)
    })
  })(this)))
});
ScalaJS.c.scala_collection_TraversableLike$$anonfun$find$1.prototype.apply__O = (function() {
  this.apply__V();
  return ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit()
});
ScalaJS.c.scala_collection_TraversableLike$$anonfun$find$1.prototype.init___Lscala_collection_TraversableLike__Lscala_runtime_ObjectRef__Lscala_Function1 = (function($$outer, result$4, p$6) {
  if (($$outer === null)) {
    throw new ScalaJS.c.java_lang_NullPointerException().init___()
  } else {
    this.$$outer$3 = $$outer
  };
  this.result$4$f = result$4;
  this.p$6$f = p$6;
  ScalaJS.c.scala_runtime_AbstractFunction0$mcV$sp.prototype.init___.call(this);
  return this
});
/** @constructor */
ScalaJS.inheritable.scala_collection_TraversableLike$$anonfun$find$1 = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_TraversableLike$$anonfun$find$1.prototype = ScalaJS.c.scala_collection_TraversableLike$$anonfun$find$1.prototype;
ScalaJS.is.scala_collection_TraversableLike$$anonfun$find$1 = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_TraversableLike$$anonfun$find$1)))
});
ScalaJS.as.scala_collection_TraversableLike$$anonfun$find$1 = (function(obj) {
  if ((ScalaJS.is.scala_collection_TraversableLike$$anonfun$find$1(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.TraversableLike$$anonfun$find$1")
  }
});
ScalaJS.isArrayOf.scala_collection_TraversableLike$$anonfun$find$1 = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_TraversableLike$$anonfun$find$1)))
});
ScalaJS.asArrayOf.scala_collection_TraversableLike$$anonfun$find$1 = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_TraversableLike$$anonfun$find$1(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.TraversableLike$$anonfun$find$1;", depth)
  }
});
ScalaJS.data.scala_collection_TraversableLike$$anonfun$find$1 = new ScalaJS.ClassTypeData({
  scala_collection_TraversableLike$$anonfun$find$1: 0
}, false, "scala.collection.TraversableLike$$anonfun$find$1", ScalaJS.data.scala_runtime_AbstractFunction0$mcV$sp, {
  scala_collection_TraversableLike$$anonfun$find$1: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_runtime_AbstractFunction0$mcV$sp: 1,
  scala_Function0$mcV$sp: 1,
  scala_runtime_AbstractFunction0: 1,
  scala_Function0: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_TraversableLike$$anonfun$find$1.prototype.$classData = ScalaJS.data.scala_collection_TraversableLike$$anonfun$find$1;
//@ sourceMappingURL=TraversableLike$$anonfun$find$1.js.map
