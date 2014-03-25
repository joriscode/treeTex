/** @constructor */
ScalaJS.c.scala_collection_mutable_ArrayOps$ofByte$ = (function() {
  ScalaJS.c.java_lang_Object.call(this)
});
ScalaJS.c.scala_collection_mutable_ArrayOps$ofByte$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_collection_mutable_ArrayOps$ofByte$.prototype.constructor = ScalaJS.c.scala_collection_mutable_ArrayOps$ofByte$;
ScalaJS.c.scala_collection_mutable_ArrayOps$ofByte$.prototype.thisCollection$extension__AB__Lscala_collection_mutable_WrappedArray = (function($$this) {
  return new ScalaJS.c.scala_collection_mutable_WrappedArray$ofByte().init___AB($$this)
});
ScalaJS.c.scala_collection_mutable_ArrayOps$ofByte$.prototype.toCollection$extension__AB__AB__Lscala_collection_mutable_WrappedArray = (function($$this, repr) {
  return new ScalaJS.c.scala_collection_mutable_WrappedArray$ofByte().init___AB(repr)
});
ScalaJS.c.scala_collection_mutable_ArrayOps$ofByte$.prototype.newBuilder$extension__AB__Lscala_collection_mutable_ArrayBuilder$ofByte = (function($$this) {
  return new ScalaJS.c.scala_collection_mutable_ArrayBuilder$ofByte().init___()
});
ScalaJS.c.scala_collection_mutable_ArrayOps$ofByte$.prototype.length$extension__AB__I = (function($$this) {
  return $$this.underlying.length
});
ScalaJS.c.scala_collection_mutable_ArrayOps$ofByte$.prototype.apply$extension__AB__I__B = (function($$this, index) {
  return $$this.underlying[index]
});
ScalaJS.c.scala_collection_mutable_ArrayOps$ofByte$.prototype.update$extension__AB__I__B__V = (function($$this, index, elem) {
  $$this.underlying[index] = elem
});
ScalaJS.c.scala_collection_mutable_ArrayOps$ofByte$.prototype.hashCode$extension__AB__I = (function($$this) {
  return ScalaJS.objectHashCode($$this)
});
ScalaJS.c.scala_collection_mutable_ArrayOps$ofByte$.prototype.equals$extension__AB__O__Z = (function($$this, x$1) {
  var x1 = x$1;
  matchEnd4: {
    if (ScalaJS.is.scala_collection_mutable_ArrayOps$ofByte(x1)) {
      var jsx$1 = true;
      break matchEnd4
    };
    var jsx$1 = false;
    break matchEnd4
  };
  if (jsx$1) {
    if ((x$1 === null)) {
      var ofByte$1 = null
    } else {
      var ofByte$1 = ScalaJS.as.scala_collection_mutable_ArrayOps$ofByte(x$1).repr__AB()
    };
    return ($$this === ofByte$1)
  } else {
    return false
  }
});
ScalaJS.c.scala_collection_mutable_ArrayOps$ofByte$.prototype.equals$extension__AB__O__ = (function($$this, x$1) {
  return ScalaJS.bZ(this.equals$extension__AB__O__Z($$this, x$1))
});
ScalaJS.c.scala_collection_mutable_ArrayOps$ofByte$.prototype.hashCode$extension__AB__ = (function($$this$2) {
  return ScalaJS.bI(this.hashCode$extension__AB__I($$this$2))
});
ScalaJS.c.scala_collection_mutable_ArrayOps$ofByte$.prototype.update$extension__AB__I__B__ = (function($$this$3, index, elem) {
  return ScalaJS.bV(this.update$extension__AB__I__B__V($$this$3, index, elem))
});
ScalaJS.c.scala_collection_mutable_ArrayOps$ofByte$.prototype.apply$extension__AB__I__ = (function($$this$4, index$2) {
  return ScalaJS.bB(this.apply$extension__AB__I__B($$this$4, index$2))
});
ScalaJS.c.scala_collection_mutable_ArrayOps$ofByte$.prototype.length$extension__AB__ = (function($$this$5) {
  return ScalaJS.bI(this.length$extension__AB__I($$this$5))
});
ScalaJS.c.scala_collection_mutable_ArrayOps$ofByte$.prototype.newBuilder$extension__AB__ = (function($$this$6) {
  return this.newBuilder$extension__AB__Lscala_collection_mutable_ArrayBuilder$ofByte($$this$6)
});
ScalaJS.c.scala_collection_mutable_ArrayOps$ofByte$.prototype.toCollection$extension__AB__AB__ = (function($$this$7, repr) {
  return this.toCollection$extension__AB__AB__Lscala_collection_mutable_WrappedArray($$this$7, repr)
});
ScalaJS.c.scala_collection_mutable_ArrayOps$ofByte$.prototype.thisCollection$extension__AB__ = (function($$this$8) {
  return this.thisCollection$extension__AB__Lscala_collection_mutable_WrappedArray($$this$8)
});
/** @constructor */
ScalaJS.inheritable.scala_collection_mutable_ArrayOps$ofByte$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_mutable_ArrayOps$ofByte$.prototype = ScalaJS.c.scala_collection_mutable_ArrayOps$ofByte$.prototype;
ScalaJS.is.scala_collection_mutable_ArrayOps$ofByte$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_mutable_ArrayOps$ofByte$)))
});
ScalaJS.as.scala_collection_mutable_ArrayOps$ofByte$ = (function(obj) {
  if ((ScalaJS.is.scala_collection_mutable_ArrayOps$ofByte$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.mutable.ArrayOps$ofByte")
  }
});
ScalaJS.isArrayOf.scala_collection_mutable_ArrayOps$ofByte$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_mutable_ArrayOps$ofByte$)))
});
ScalaJS.asArrayOf.scala_collection_mutable_ArrayOps$ofByte$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_mutable_ArrayOps$ofByte$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.mutable.ArrayOps$ofByte;", depth)
  }
});
ScalaJS.data.scala_collection_mutable_ArrayOps$ofByte$ = new ScalaJS.ClassTypeData({
  scala_collection_mutable_ArrayOps$ofByte$: 0
}, false, "scala.collection.mutable.ArrayOps$ofByte$", ScalaJS.data.java_lang_Object, {
  scala_collection_mutable_ArrayOps$ofByte$: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_mutable_ArrayOps$ofByte$.prototype.$classData = ScalaJS.data.scala_collection_mutable_ArrayOps$ofByte$;
ScalaJS.moduleInstances.scala_collection_mutable_ArrayOps$ofByte = undefined;
ScalaJS.modules.scala_collection_mutable_ArrayOps$ofByte = (function() {
  if ((!ScalaJS.moduleInstances.scala_collection_mutable_ArrayOps$ofByte)) {
    ScalaJS.moduleInstances.scala_collection_mutable_ArrayOps$ofByte = new ScalaJS.c.scala_collection_mutable_ArrayOps$ofByte$().init___()
  };
  return ScalaJS.moduleInstances.scala_collection_mutable_ArrayOps$ofByte
});
//@ sourceMappingURL=ArrayOps$ofByte$.js.map
