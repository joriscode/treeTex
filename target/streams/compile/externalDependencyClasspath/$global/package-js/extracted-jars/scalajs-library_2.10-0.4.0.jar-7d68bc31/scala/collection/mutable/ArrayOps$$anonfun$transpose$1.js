/** @constructor */
ScalaJS.c.scala_collection_mutable_ArrayOps$$anonfun$transpose$1 = (function() {
  ScalaJS.c.scala_runtime_AbstractFunction1.call(this);
  this.bs$1$f = null;
  this.asArray$1$2 = null
});
ScalaJS.c.scala_collection_mutable_ArrayOps$$anonfun$transpose$1.prototype = new ScalaJS.inheritable.scala_runtime_AbstractFunction1();
ScalaJS.c.scala_collection_mutable_ArrayOps$$anonfun$transpose$1.prototype.constructor = ScalaJS.c.scala_collection_mutable_ArrayOps$$anonfun$transpose$1;
ScalaJS.c.scala_collection_mutable_ArrayOps$$anonfun$transpose$1.prototype.apply__O__V = (function(xs) {
  var i = new ScalaJS.c.scala_runtime_IntRef().init___I(0);
  ScalaJS.modules.scala_Predef().genericArrayOps__O__Lscala_collection_mutable_ArrayOps(this.asArray$1$2.apply__O__O(xs)).foreach__Lscala_Function1__V(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(arg$outer, i$1) {
    return (function(x) {
      arg$outer.bs$1$f.underlying[i$1.elem$1].$$plus$eq__O__Lscala_collection_mutable_Builder(x);
      i$1.elem$1 = (i$1.elem$1 + 1);
      return ScalaJS.bV(undefined)
    })
  })(this, i)))
});
ScalaJS.c.scala_collection_mutable_ArrayOps$$anonfun$transpose$1.prototype.apply__O__O = (function(v1) {
  this.apply__O__V(v1);
  return ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit()
});
ScalaJS.c.scala_collection_mutable_ArrayOps$$anonfun$transpose$1.prototype.init___Lscala_collection_mutable_ArrayOps__ALscala_collection_mutable_ArrayBuilder__Lscala_Function1 = (function($$outer, bs$1, asArray$1) {
  this.bs$1$f = bs$1;
  this.asArray$1$2 = asArray$1;
  ScalaJS.c.scala_runtime_AbstractFunction1.prototype.init___.call(this);
  return this
});
/** @constructor */
ScalaJS.inheritable.scala_collection_mutable_ArrayOps$$anonfun$transpose$1 = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_mutable_ArrayOps$$anonfun$transpose$1.prototype = ScalaJS.c.scala_collection_mutable_ArrayOps$$anonfun$transpose$1.prototype;
ScalaJS.is.scala_collection_mutable_ArrayOps$$anonfun$transpose$1 = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_mutable_ArrayOps$$anonfun$transpose$1)))
});
ScalaJS.as.scala_collection_mutable_ArrayOps$$anonfun$transpose$1 = (function(obj) {
  if ((ScalaJS.is.scala_collection_mutable_ArrayOps$$anonfun$transpose$1(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.mutable.ArrayOps$$anonfun$transpose$1")
  }
});
ScalaJS.isArrayOf.scala_collection_mutable_ArrayOps$$anonfun$transpose$1 = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_mutable_ArrayOps$$anonfun$transpose$1)))
});
ScalaJS.asArrayOf.scala_collection_mutable_ArrayOps$$anonfun$transpose$1 = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_mutable_ArrayOps$$anonfun$transpose$1(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.mutable.ArrayOps$$anonfun$transpose$1;", depth)
  }
});
ScalaJS.data.scala_collection_mutable_ArrayOps$$anonfun$transpose$1 = new ScalaJS.ClassTypeData({
  scala_collection_mutable_ArrayOps$$anonfun$transpose$1: 0
}, false, "scala.collection.mutable.ArrayOps$$anonfun$transpose$1", ScalaJS.data.scala_runtime_AbstractFunction1, {
  scala_collection_mutable_ArrayOps$$anonfun$transpose$1: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_runtime_AbstractFunction1: 1,
  scala_Function1: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_mutable_ArrayOps$$anonfun$transpose$1.prototype.$classData = ScalaJS.data.scala_collection_mutable_ArrayOps$$anonfun$transpose$1;
//@ sourceMappingURL=ArrayOps$$anonfun$transpose$1.js.map
