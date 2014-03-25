/** @constructor */
ScalaJS.c.scala_collection_mutable_ArrayOps$ofUnit$ = (function() {
  ScalaJS.c.java_lang_Object.call(this)
});
ScalaJS.c.scala_collection_mutable_ArrayOps$ofUnit$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_collection_mutable_ArrayOps$ofUnit$.prototype.constructor = ScalaJS.c.scala_collection_mutable_ArrayOps$ofUnit$;
ScalaJS.c.scala_collection_mutable_ArrayOps$ofUnit$.prototype.thisCollection$extension__ALscala_runtime_BoxedUnit__Lscala_collection_mutable_WrappedArray = (function($$this) {
  return new ScalaJS.c.scala_collection_mutable_WrappedArray$ofUnit().init___ALscala_runtime_BoxedUnit($$this)
});
ScalaJS.c.scala_collection_mutable_ArrayOps$ofUnit$.prototype.toCollection$extension__ALscala_runtime_BoxedUnit__ALscala_runtime_BoxedUnit__Lscala_collection_mutable_WrappedArray = (function($$this, repr) {
  return new ScalaJS.c.scala_collection_mutable_WrappedArray$ofUnit().init___ALscala_runtime_BoxedUnit(repr)
});
ScalaJS.c.scala_collection_mutable_ArrayOps$ofUnit$.prototype.newBuilder$extension__ALscala_runtime_BoxedUnit__Lscala_collection_mutable_ArrayBuilder$ofUnit = (function($$this) {
  return new ScalaJS.c.scala_collection_mutable_ArrayBuilder$ofUnit().init___()
});
ScalaJS.c.scala_collection_mutable_ArrayOps$ofUnit$.prototype.length$extension__ALscala_runtime_BoxedUnit__I = (function($$this) {
  return $$this.underlying.length
});
ScalaJS.c.scala_collection_mutable_ArrayOps$ofUnit$.prototype.apply$extension__ALscala_runtime_BoxedUnit__I__V = (function($$this, index) {
  $$this.underlying[index]
});
ScalaJS.c.scala_collection_mutable_ArrayOps$ofUnit$.prototype.update$extension__ALscala_runtime_BoxedUnit__I__Lscala_runtime_BoxedUnit__V = (function($$this, index, elem) {
  $$this.underlying[index] = elem
});
ScalaJS.c.scala_collection_mutable_ArrayOps$ofUnit$.prototype.hashCode$extension__ALscala_runtime_BoxedUnit__I = (function($$this) {
  return ScalaJS.objectHashCode($$this)
});
ScalaJS.c.scala_collection_mutable_ArrayOps$ofUnit$.prototype.equals$extension__ALscala_runtime_BoxedUnit__O__Z = (function($$this, x$1) {
  var x1 = x$1;
  matchEnd4: {
    if (ScalaJS.is.scala_collection_mutable_ArrayOps$ofUnit(x1)) {
      var jsx$1 = true;
      break matchEnd4
    };
    var jsx$1 = false;
    break matchEnd4
  };
  if (jsx$1) {
    if ((x$1 === null)) {
      var ofUnit$1 = null
    } else {
      var ofUnit$1 = ScalaJS.as.scala_collection_mutable_ArrayOps$ofUnit(x$1).repr__ALscala_runtime_BoxedUnit()
    };
    return ($$this === ofUnit$1)
  } else {
    return false
  }
});
ScalaJS.c.scala_collection_mutable_ArrayOps$ofUnit$.prototype.equals$extension__ALscala_runtime_BoxedUnit__O__ = (function($$this, x$1) {
  return ScalaJS.bZ(this.equals$extension__ALscala_runtime_BoxedUnit__O__Z($$this, x$1))
});
ScalaJS.c.scala_collection_mutable_ArrayOps$ofUnit$.prototype.hashCode$extension__ALscala_runtime_BoxedUnit__ = (function($$this$2) {
  return ScalaJS.bI(this.hashCode$extension__ALscala_runtime_BoxedUnit__I($$this$2))
});
ScalaJS.c.scala_collection_mutable_ArrayOps$ofUnit$.prototype.update$extension__ALscala_runtime_BoxedUnit__I__Lscala_runtime_BoxedUnit__ = (function($$this$3, index, elem) {
  return ScalaJS.bV(this.update$extension__ALscala_runtime_BoxedUnit__I__Lscala_runtime_BoxedUnit__V($$this$3, index, elem))
});
ScalaJS.c.scala_collection_mutable_ArrayOps$ofUnit$.prototype.apply$extension__ALscala_runtime_BoxedUnit__I__ = (function($$this$4, index$2) {
  return ScalaJS.bV(this.apply$extension__ALscala_runtime_BoxedUnit__I__V($$this$4, index$2))
});
ScalaJS.c.scala_collection_mutable_ArrayOps$ofUnit$.prototype.length$extension__ALscala_runtime_BoxedUnit__ = (function($$this$5) {
  return ScalaJS.bI(this.length$extension__ALscala_runtime_BoxedUnit__I($$this$5))
});
ScalaJS.c.scala_collection_mutable_ArrayOps$ofUnit$.prototype.newBuilder$extension__ALscala_runtime_BoxedUnit__ = (function($$this$6) {
  return this.newBuilder$extension__ALscala_runtime_BoxedUnit__Lscala_collection_mutable_ArrayBuilder$ofUnit($$this$6)
});
ScalaJS.c.scala_collection_mutable_ArrayOps$ofUnit$.prototype.toCollection$extension__ALscala_runtime_BoxedUnit__ALscala_runtime_BoxedUnit__ = (function($$this$7, repr) {
  return this.toCollection$extension__ALscala_runtime_BoxedUnit__ALscala_runtime_BoxedUnit__Lscala_collection_mutable_WrappedArray($$this$7, repr)
});
ScalaJS.c.scala_collection_mutable_ArrayOps$ofUnit$.prototype.thisCollection$extension__ALscala_runtime_BoxedUnit__ = (function($$this$8) {
  return this.thisCollection$extension__ALscala_runtime_BoxedUnit__Lscala_collection_mutable_WrappedArray($$this$8)
});
/** @constructor */
ScalaJS.inheritable.scala_collection_mutable_ArrayOps$ofUnit$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_mutable_ArrayOps$ofUnit$.prototype = ScalaJS.c.scala_collection_mutable_ArrayOps$ofUnit$.prototype;
ScalaJS.is.scala_collection_mutable_ArrayOps$ofUnit$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_mutable_ArrayOps$ofUnit$)))
});
ScalaJS.as.scala_collection_mutable_ArrayOps$ofUnit$ = (function(obj) {
  if ((ScalaJS.is.scala_collection_mutable_ArrayOps$ofUnit$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.mutable.ArrayOps$ofUnit")
  }
});
ScalaJS.isArrayOf.scala_collection_mutable_ArrayOps$ofUnit$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_mutable_ArrayOps$ofUnit$)))
});
ScalaJS.asArrayOf.scala_collection_mutable_ArrayOps$ofUnit$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_mutable_ArrayOps$ofUnit$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.mutable.ArrayOps$ofUnit;", depth)
  }
});
ScalaJS.data.scala_collection_mutable_ArrayOps$ofUnit$ = new ScalaJS.ClassTypeData({
  scala_collection_mutable_ArrayOps$ofUnit$: 0
}, false, "scala.collection.mutable.ArrayOps$ofUnit$", ScalaJS.data.java_lang_Object, {
  scala_collection_mutable_ArrayOps$ofUnit$: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_mutable_ArrayOps$ofUnit$.prototype.$classData = ScalaJS.data.scala_collection_mutable_ArrayOps$ofUnit$;
ScalaJS.moduleInstances.scala_collection_mutable_ArrayOps$ofUnit = undefined;
ScalaJS.modules.scala_collection_mutable_ArrayOps$ofUnit = (function() {
  if ((!ScalaJS.moduleInstances.scala_collection_mutable_ArrayOps$ofUnit)) {
    ScalaJS.moduleInstances.scala_collection_mutable_ArrayOps$ofUnit = new ScalaJS.c.scala_collection_mutable_ArrayOps$ofUnit$().init___()
  };
  return ScalaJS.moduleInstances.scala_collection_mutable_ArrayOps$ofUnit
});
//@ sourceMappingURL=ArrayOps$ofUnit$.js.map
