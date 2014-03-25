/** @constructor */
ScalaJS.c.scala_collection_generic_GenTraversableFactory$$anonfun$tabulate$1 = (function() {
  ScalaJS.c.scala_runtime_AbstractFunction1.call(this);
  this.$$outer$2 = null;
  this.n2$8$2 = 0;
  this.f$4$f = null
});
ScalaJS.c.scala_collection_generic_GenTraversableFactory$$anonfun$tabulate$1.prototype = new ScalaJS.inheritable.scala_runtime_AbstractFunction1();
ScalaJS.c.scala_collection_generic_GenTraversableFactory$$anonfun$tabulate$1.prototype.constructor = ScalaJS.c.scala_collection_generic_GenTraversableFactory$$anonfun$tabulate$1;
ScalaJS.c.scala_collection_generic_GenTraversableFactory$$anonfun$tabulate$1.prototype.apply__I__Lscala_collection_GenTraversable = (function(i1) {
  return this.$$outer$2.tabulate__I__Lscala_Function1__Lscala_collection_GenTraversable(this.n2$8$2, new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(arg$outer, i1$1) {
    return (function(x$7) {
      x$7 = ScalaJS.uI(x$7);
      return arg$outer.f$4$f.apply__O__O__O(ScalaJS.bI(i1$1), ScalaJS.bI(x$7))
    })
  })(this, i1)))
});
ScalaJS.c.scala_collection_generic_GenTraversableFactory$$anonfun$tabulate$1.prototype.apply__O__O = (function(v1) {
  return this.apply__I__Lscala_collection_GenTraversable(ScalaJS.uI(v1))
});
ScalaJS.c.scala_collection_generic_GenTraversableFactory$$anonfun$tabulate$1.prototype.init___Lscala_collection_generic_GenTraversableFactory__I__Lscala_Function2 = (function($$outer, n2$8, f$4) {
  if (($$outer === null)) {
    throw new ScalaJS.c.java_lang_NullPointerException().init___()
  } else {
    this.$$outer$2 = $$outer
  };
  this.n2$8$2 = n2$8;
  this.f$4$f = f$4;
  ScalaJS.c.scala_runtime_AbstractFunction1.prototype.init___.call(this);
  return this
});
ScalaJS.c.scala_collection_generic_GenTraversableFactory$$anonfun$tabulate$1.prototype.apply__I__ = (function(i1) {
  return this.apply__I__Lscala_collection_GenTraversable(i1)
});
/** @constructor */
ScalaJS.inheritable.scala_collection_generic_GenTraversableFactory$$anonfun$tabulate$1 = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_generic_GenTraversableFactory$$anonfun$tabulate$1.prototype = ScalaJS.c.scala_collection_generic_GenTraversableFactory$$anonfun$tabulate$1.prototype;
ScalaJS.is.scala_collection_generic_GenTraversableFactory$$anonfun$tabulate$1 = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_generic_GenTraversableFactory$$anonfun$tabulate$1)))
});
ScalaJS.as.scala_collection_generic_GenTraversableFactory$$anonfun$tabulate$1 = (function(obj) {
  if ((ScalaJS.is.scala_collection_generic_GenTraversableFactory$$anonfun$tabulate$1(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.generic.GenTraversableFactory$$anonfun$tabulate$1")
  }
});
ScalaJS.isArrayOf.scala_collection_generic_GenTraversableFactory$$anonfun$tabulate$1 = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_generic_GenTraversableFactory$$anonfun$tabulate$1)))
});
ScalaJS.asArrayOf.scala_collection_generic_GenTraversableFactory$$anonfun$tabulate$1 = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_generic_GenTraversableFactory$$anonfun$tabulate$1(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.generic.GenTraversableFactory$$anonfun$tabulate$1;", depth)
  }
});
ScalaJS.data.scala_collection_generic_GenTraversableFactory$$anonfun$tabulate$1 = new ScalaJS.ClassTypeData({
  scala_collection_generic_GenTraversableFactory$$anonfun$tabulate$1: 0
}, false, "scala.collection.generic.GenTraversableFactory$$anonfun$tabulate$1", ScalaJS.data.scala_runtime_AbstractFunction1, {
  scala_collection_generic_GenTraversableFactory$$anonfun$tabulate$1: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_runtime_AbstractFunction1: 1,
  scala_Function1: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_generic_GenTraversableFactory$$anonfun$tabulate$1.prototype.$classData = ScalaJS.data.scala_collection_generic_GenTraversableFactory$$anonfun$tabulate$1;
//@ sourceMappingURL=GenTraversableFactory$$anonfun$tabulate$1.js.map
