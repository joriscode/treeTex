/** @constructor */
ScalaJS.c.scala_collection_mutable_WrappedArray$ = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.EmptyWrappedArray$1 = null
});
ScalaJS.c.scala_collection_mutable_WrappedArray$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_collection_mutable_WrappedArray$.prototype.constructor = ScalaJS.c.scala_collection_mutable_WrappedArray$;
ScalaJS.c.scala_collection_mutable_WrappedArray$.prototype.EmptyWrappedArray__p1__Lscala_collection_mutable_WrappedArray$ofRef = (function() {
  return this.EmptyWrappedArray$1
});
ScalaJS.c.scala_collection_mutable_WrappedArray$.prototype.empty__Lscala_collection_mutable_WrappedArray = (function() {
  return this.EmptyWrappedArray__p1__Lscala_collection_mutable_WrappedArray$ofRef()
});
ScalaJS.c.scala_collection_mutable_WrappedArray$.prototype.make__O__Lscala_collection_mutable_WrappedArray = (function(x) {
  var x1 = x;
  if (ScalaJS.anyRefEqEq(null, x1)) {
    return null
  };
  if (ScalaJS.isArrayOf.java_lang_Object(x1, 1)) {
    var x3 = ScalaJS.asArrayOf.java_lang_Object(x1, 1);
    return new ScalaJS.c.scala_collection_mutable_WrappedArray$ofRef().init___AO(x3)
  };
  if (ScalaJS.isArrayOf.scala_Int(x1, 1)) {
    var x4 = ScalaJS.asArrayOf.scala_Int(x1, 1);
    return new ScalaJS.c.scala_collection_mutable_WrappedArray$ofInt().init___AI(x4)
  };
  if (ScalaJS.isArrayOf.scala_Double(x1, 1)) {
    var x5 = ScalaJS.asArrayOf.scala_Double(x1, 1);
    return new ScalaJS.c.scala_collection_mutable_WrappedArray$ofDouble().init___AD(x5)
  };
  if (ScalaJS.isArrayOf.scala_Long(x1, 1)) {
    var x6 = ScalaJS.asArrayOf.scala_Long(x1, 1);
    return new ScalaJS.c.scala_collection_mutable_WrappedArray$ofLong().init___AJ(x6)
  };
  if (ScalaJS.isArrayOf.scala_Float(x1, 1)) {
    var x7 = ScalaJS.asArrayOf.scala_Float(x1, 1);
    return new ScalaJS.c.scala_collection_mutable_WrappedArray$ofFloat().init___AF(x7)
  };
  if (ScalaJS.isArrayOf.scala_Char(x1, 1)) {
    var x8 = ScalaJS.asArrayOf.scala_Char(x1, 1);
    return new ScalaJS.c.scala_collection_mutable_WrappedArray$ofChar().init___AC(x8)
  };
  if (ScalaJS.isArrayOf.scala_Byte(x1, 1)) {
    var x9 = ScalaJS.asArrayOf.scala_Byte(x1, 1);
    return new ScalaJS.c.scala_collection_mutable_WrappedArray$ofByte().init___AB(x9)
  };
  if (ScalaJS.isArrayOf.scala_Short(x1, 1)) {
    var x10 = ScalaJS.asArrayOf.scala_Short(x1, 1);
    return new ScalaJS.c.scala_collection_mutable_WrappedArray$ofShort().init___AS(x10)
  };
  if (ScalaJS.isArrayOf.scala_Boolean(x1, 1)) {
    var x11 = ScalaJS.asArrayOf.scala_Boolean(x1, 1);
    return new ScalaJS.c.scala_collection_mutable_WrappedArray$ofBoolean().init___AZ(x11)
  };
  if (ScalaJS.isArrayOf.scala_runtime_BoxedUnit(x1, 1)) {
    var x12 = ScalaJS.asArrayOf.scala_runtime_BoxedUnit(x1, 1);
    return new ScalaJS.c.scala_collection_mutable_WrappedArray$ofUnit().init___ALscala_runtime_BoxedUnit(x12)
  };
  throw new ScalaJS.c.scala_MatchError().init___O(x1)
});
ScalaJS.c.scala_collection_mutable_WrappedArray$.prototype.canBuildFrom__Lscala_reflect_ClassTag__Lscala_collection_generic_CanBuildFrom = (function(m) {
  return new ScalaJS.c.scala_collection_mutable_WrappedArray$$anon$1().init___Lscala_reflect_ClassTag(m)
});
ScalaJS.c.scala_collection_mutable_WrappedArray$.prototype.newBuilder__Lscala_collection_mutable_Builder = (function() {
  return new ScalaJS.c.scala_collection_mutable_ArrayBuffer().init___()
});
ScalaJS.c.scala_collection_mutable_WrappedArray$.prototype.init___ = (function() {
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  ScalaJS.moduleInstances.scala_collection_mutable_WrappedArray = this;
  this.EmptyWrappedArray$1 = new ScalaJS.c.scala_collection_mutable_WrappedArray$ofRef().init___AO(ScalaJS.newArrayObject(ScalaJS.data.java_lang_Object.getArrayOf(), [0]));
  return this
});
ScalaJS.c.scala_collection_mutable_WrappedArray$.prototype.newBuilder__ = (function() {
  return this.newBuilder__Lscala_collection_mutable_Builder()
});
ScalaJS.c.scala_collection_mutable_WrappedArray$.prototype.canBuildFrom__Lscala_reflect_ClassTag__ = (function(m) {
  return this.canBuildFrom__Lscala_reflect_ClassTag__Lscala_collection_generic_CanBuildFrom(m)
});
ScalaJS.c.scala_collection_mutable_WrappedArray$.prototype.make__O__ = (function(x) {
  return this.make__O__Lscala_collection_mutable_WrappedArray(x)
});
ScalaJS.c.scala_collection_mutable_WrappedArray$.prototype.empty__ = (function() {
  return this.empty__Lscala_collection_mutable_WrappedArray()
});
/** @constructor */
ScalaJS.inheritable.scala_collection_mutable_WrappedArray$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_mutable_WrappedArray$.prototype = ScalaJS.c.scala_collection_mutable_WrappedArray$.prototype;
ScalaJS.is.scala_collection_mutable_WrappedArray$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_mutable_WrappedArray$)))
});
ScalaJS.as.scala_collection_mutable_WrappedArray$ = (function(obj) {
  if ((ScalaJS.is.scala_collection_mutable_WrappedArray$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.mutable.WrappedArray")
  }
});
ScalaJS.isArrayOf.scala_collection_mutable_WrappedArray$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_mutable_WrappedArray$)))
});
ScalaJS.asArrayOf.scala_collection_mutable_WrappedArray$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_mutable_WrappedArray$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.mutable.WrappedArray;", depth)
  }
});
ScalaJS.data.scala_collection_mutable_WrappedArray$ = new ScalaJS.ClassTypeData({
  scala_collection_mutable_WrappedArray$: 0
}, false, "scala.collection.mutable.WrappedArray$", ScalaJS.data.java_lang_Object, {
  scala_collection_mutable_WrappedArray$: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_mutable_WrappedArray$.prototype.$classData = ScalaJS.data.scala_collection_mutable_WrappedArray$;
ScalaJS.moduleInstances.scala_collection_mutable_WrappedArray = undefined;
ScalaJS.modules.scala_collection_mutable_WrappedArray = (function() {
  if ((!ScalaJS.moduleInstances.scala_collection_mutable_WrappedArray)) {
    ScalaJS.moduleInstances.scala_collection_mutable_WrappedArray = new ScalaJS.c.scala_collection_mutable_WrappedArray$().init___()
  };
  return ScalaJS.moduleInstances.scala_collection_mutable_WrappedArray
});
//@ sourceMappingURL=WrappedArray$.js.map
