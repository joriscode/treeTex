/** @constructor */
ScalaJS.c.scala_collection_mutable_Publisher$$anonfun$publish$1 = (function() {
  ScalaJS.c.scala_runtime_AbstractFunction1.call(this);
  this.$$outer$2 = null;
  this.event$1$f = null
});
ScalaJS.c.scala_collection_mutable_Publisher$$anonfun$publish$1.prototype = new ScalaJS.inheritable.scala_runtime_AbstractFunction1();
ScalaJS.c.scala_collection_mutable_Publisher$$anonfun$publish$1.prototype.constructor = ScalaJS.c.scala_collection_mutable_Publisher$$anonfun$publish$1;
ScalaJS.c.scala_collection_mutable_Publisher$$anonfun$publish$1.prototype.apply__Lscala_collection_mutable_Subscriber__V = (function(sub) {
  if (((!this.$$outer$2.scala$collection$mutable$Publisher$$suspended__Lscala_collection_mutable_HashSet().contains__O__Z(sub)) && ScalaJS.as.scala_collection_mutable_MultiMap(this.$$outer$2.scala$collection$mutable$Publisher$$filters__Lscala_collection_mutable_HashMap()).entryExists__O__Lscala_Function1__Z(sub, new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(arg$outer) {
    return (function(p) {
      return ScalaJS.bZ(ScalaJS.uZ(p.apply__O__O(arg$outer.event$1$f)))
    })
  })(this))))) {
    sub.notify__O__O__V(this.$$outer$2.self__Lscala_collection_mutable_Publisher(), this.event$1$f)
  }
});
ScalaJS.c.scala_collection_mutable_Publisher$$anonfun$publish$1.prototype.apply__O__O = (function(v1) {
  this.apply__Lscala_collection_mutable_Subscriber__V(ScalaJS.as.scala_collection_mutable_Subscriber(v1));
  return ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit()
});
ScalaJS.c.scala_collection_mutable_Publisher$$anonfun$publish$1.prototype.init___Lscala_collection_mutable_Publisher__O = (function($$outer, event$1) {
  if (($$outer === null)) {
    throw new ScalaJS.c.java_lang_NullPointerException().init___()
  } else {
    this.$$outer$2 = $$outer
  };
  this.event$1$f = event$1;
  ScalaJS.c.scala_runtime_AbstractFunction1.prototype.init___.call(this);
  return this
});
ScalaJS.c.scala_collection_mutable_Publisher$$anonfun$publish$1.prototype.apply__Lscala_collection_mutable_Subscriber__ = (function(sub) {
  return ScalaJS.bV(this.apply__Lscala_collection_mutable_Subscriber__V(sub))
});
/** @constructor */
ScalaJS.inheritable.scala_collection_mutable_Publisher$$anonfun$publish$1 = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_mutable_Publisher$$anonfun$publish$1.prototype = ScalaJS.c.scala_collection_mutable_Publisher$$anonfun$publish$1.prototype;
ScalaJS.is.scala_collection_mutable_Publisher$$anonfun$publish$1 = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_mutable_Publisher$$anonfun$publish$1)))
});
ScalaJS.as.scala_collection_mutable_Publisher$$anonfun$publish$1 = (function(obj) {
  if ((ScalaJS.is.scala_collection_mutable_Publisher$$anonfun$publish$1(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.mutable.Publisher$$anonfun$publish$1")
  }
});
ScalaJS.isArrayOf.scala_collection_mutable_Publisher$$anonfun$publish$1 = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_mutable_Publisher$$anonfun$publish$1)))
});
ScalaJS.asArrayOf.scala_collection_mutable_Publisher$$anonfun$publish$1 = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_mutable_Publisher$$anonfun$publish$1(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.mutable.Publisher$$anonfun$publish$1;", depth)
  }
});
ScalaJS.data.scala_collection_mutable_Publisher$$anonfun$publish$1 = new ScalaJS.ClassTypeData({
  scala_collection_mutable_Publisher$$anonfun$publish$1: 0
}, false, "scala.collection.mutable.Publisher$$anonfun$publish$1", ScalaJS.data.scala_runtime_AbstractFunction1, {
  scala_collection_mutable_Publisher$$anonfun$publish$1: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_runtime_AbstractFunction1: 1,
  scala_Function1: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_mutable_Publisher$$anonfun$publish$1.prototype.$classData = ScalaJS.data.scala_collection_mutable_Publisher$$anonfun$publish$1;
//@ sourceMappingURL=Publisher$$anonfun$publish$1.js.map
