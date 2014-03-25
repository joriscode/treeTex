/** @constructor */
ScalaJS.c.scala_collection_GenTraversableViewLike$FlatMapped$$anonfun$foreach$3 = (function() {
  ScalaJS.c.scala_runtime_AbstractFunction1.call(this);
  this.$$outer$2 = null;
  this.f$3$f = null
});
ScalaJS.c.scala_collection_GenTraversableViewLike$FlatMapped$$anonfun$foreach$3.prototype = new ScalaJS.inheritable.scala_runtime_AbstractFunction1();
ScalaJS.c.scala_collection_GenTraversableViewLike$FlatMapped$$anonfun$foreach$3.prototype.constructor = ScalaJS.c.scala_collection_GenTraversableViewLike$FlatMapped$$anonfun$foreach$3;
ScalaJS.c.scala_collection_GenTraversableViewLike$FlatMapped$$anonfun$foreach$3.prototype.apply__O__V = (function(x) {
  ScalaJS.as.scala_collection_GenTraversableOnce(this.$$outer$2.mapping__Lscala_Function1().apply__O__O(x)).seq__Lscala_collection_TraversableOnce().foreach__Lscala_Function1__V(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(arg$outer) {
    return (function(y) {
      return arg$outer.f$3$f.apply__O__O(y)
    })
  })(this)))
});
ScalaJS.c.scala_collection_GenTraversableViewLike$FlatMapped$$anonfun$foreach$3.prototype.apply__O__O = (function(v1) {
  this.apply__O__V(v1);
  return ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit()
});
ScalaJS.c.scala_collection_GenTraversableViewLike$FlatMapped$$anonfun$foreach$3.prototype.init___Lscala_collection_GenTraversableViewLike$FlatMapped__Lscala_Function1 = (function($$outer, f$3) {
  if (($$outer === null)) {
    throw new ScalaJS.c.java_lang_NullPointerException().init___()
  } else {
    this.$$outer$2 = $$outer
  };
  this.f$3$f = f$3;
  ScalaJS.c.scala_runtime_AbstractFunction1.prototype.init___.call(this);
  return this
});
/** @constructor */
ScalaJS.inheritable.scala_collection_GenTraversableViewLike$FlatMapped$$anonfun$foreach$3 = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_GenTraversableViewLike$FlatMapped$$anonfun$foreach$3.prototype = ScalaJS.c.scala_collection_GenTraversableViewLike$FlatMapped$$anonfun$foreach$3.prototype;
ScalaJS.is.scala_collection_GenTraversableViewLike$FlatMapped$$anonfun$foreach$3 = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_GenTraversableViewLike$FlatMapped$$anonfun$foreach$3)))
});
ScalaJS.as.scala_collection_GenTraversableViewLike$FlatMapped$$anonfun$foreach$3 = (function(obj) {
  if ((ScalaJS.is.scala_collection_GenTraversableViewLike$FlatMapped$$anonfun$foreach$3(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.GenTraversableViewLike$FlatMapped$$anonfun$foreach$3")
  }
});
ScalaJS.isArrayOf.scala_collection_GenTraversableViewLike$FlatMapped$$anonfun$foreach$3 = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_GenTraversableViewLike$FlatMapped$$anonfun$foreach$3)))
});
ScalaJS.asArrayOf.scala_collection_GenTraversableViewLike$FlatMapped$$anonfun$foreach$3 = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_GenTraversableViewLike$FlatMapped$$anonfun$foreach$3(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.GenTraversableViewLike$FlatMapped$$anonfun$foreach$3;", depth)
  }
});
ScalaJS.data.scala_collection_GenTraversableViewLike$FlatMapped$$anonfun$foreach$3 = new ScalaJS.ClassTypeData({
  scala_collection_GenTraversableViewLike$FlatMapped$$anonfun$foreach$3: 0
}, false, "scala.collection.GenTraversableViewLike$FlatMapped$$anonfun$foreach$3", ScalaJS.data.scala_runtime_AbstractFunction1, {
  scala_collection_GenTraversableViewLike$FlatMapped$$anonfun$foreach$3: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_runtime_AbstractFunction1: 1,
  scala_Function1: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_GenTraversableViewLike$FlatMapped$$anonfun$foreach$3.prototype.$classData = ScalaJS.data.scala_collection_GenTraversableViewLike$FlatMapped$$anonfun$foreach$3;
//@ sourceMappingURL=GenTraversableViewLike$FlatMapped$$anonfun$foreach$3.js.map
