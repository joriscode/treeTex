/** @constructor */
ScalaJS.c.scala_collection_immutable_HashSet$SerializationProxy = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.scala$collection$immutable$HashSet$SerializationProxy$$orig$1 = null
});
ScalaJS.c.scala_collection_immutable_HashSet$SerializationProxy.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_collection_immutable_HashSet$SerializationProxy.prototype.constructor = ScalaJS.c.scala_collection_immutable_HashSet$SerializationProxy;
ScalaJS.c.scala_collection_immutable_HashSet$SerializationProxy.prototype.scala$collection$immutable$HashSet$SerializationProxy$$orig__Lscala_collection_immutable_HashSet = (function() {
  return this.scala$collection$immutable$HashSet$SerializationProxy$$orig$1
});
ScalaJS.c.scala_collection_immutable_HashSet$SerializationProxy.prototype.scala$collection$immutable$HashSet$SerializationProxy$$orig$und$eq__Lscala_collection_immutable_HashSet__V = (function(x$1) {
  this.scala$collection$immutable$HashSet$SerializationProxy$$orig$1 = x$1
});
ScalaJS.c.scala_collection_immutable_HashSet$SerializationProxy.prototype.writeObject__p1__Ljava_io_ObjectOutputStream__V = (function(out) {
  var s = this.scala$collection$immutable$HashSet$SerializationProxy$$orig__Lscala_collection_immutable_HashSet().size__I();
  out.writeInt__I__V(s);
  this.scala$collection$immutable$HashSet$SerializationProxy$$orig__Lscala_collection_immutable_HashSet().foreach__Lscala_Function1__V(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(out$1) {
    return (function(e) {
      out$1.writeObject__O__V(e);
      return ScalaJS.bV(undefined)
    })
  })(out)))
});
ScalaJS.c.scala_collection_immutable_HashSet$SerializationProxy.prototype.readObject__p1__Ljava_io_ObjectInputStream__V = (function(in$2) {
  this.scala$collection$immutable$HashSet$SerializationProxy$$orig$und$eq__Lscala_collection_immutable_HashSet__V(ScalaJS.modules.scala_collection_immutable_HashSet().empty__Lscala_collection_immutable_HashSet());
  var s = in$2.readInt__I();
  ScalaJS.modules.scala_runtime_RichInt().until$extension0__I__I__Lscala_collection_immutable_Range(ScalaJS.modules.scala_Predef().intWrapper__I__I(0), s).foreach$mVc$sp__Lscala_Function1__V(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(arg$outer, in$1) {
    return (function(i) {
      i = ScalaJS.uI(i);
      var e = in$1.readObject__O();
      arg$outer.scala$collection$immutable$HashSet$SerializationProxy$$orig$und$eq__Lscala_collection_immutable_HashSet__V(arg$outer.scala$collection$immutable$HashSet$SerializationProxy$$orig__Lscala_collection_immutable_HashSet().$$plus__O__Lscala_collection_immutable_HashSet(e));
      return ScalaJS.bV(undefined)
    })
  })(this, in$2)))
});
ScalaJS.c.scala_collection_immutable_HashSet$SerializationProxy.prototype.readResolve__p1__O = (function() {
  return this.scala$collection$immutable$HashSet$SerializationProxy$$orig__Lscala_collection_immutable_HashSet()
});
ScalaJS.c.scala_collection_immutable_HashSet$SerializationProxy.prototype.init___Lscala_collection_immutable_HashSet = (function(orig) {
  this.scala$collection$immutable$HashSet$SerializationProxy$$orig$1 = orig;
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  return this
});
ScalaJS.c.scala_collection_immutable_HashSet$SerializationProxy.prototype.scala$collection$immutable$HashSet$SerializationProxy$$orig$und$eq__Lscala_collection_immutable_HashSet__ = (function(x$1) {
  return ScalaJS.bV(this.scala$collection$immutable$HashSet$SerializationProxy$$orig$und$eq__Lscala_collection_immutable_HashSet__V(x$1))
});
ScalaJS.c.scala_collection_immutable_HashSet$SerializationProxy.prototype.scala$collection$immutable$HashSet$SerializationProxy$$orig__ = (function() {
  return this.scala$collection$immutable$HashSet$SerializationProxy$$orig__Lscala_collection_immutable_HashSet()
});
/** @constructor */
ScalaJS.inheritable.scala_collection_immutable_HashSet$SerializationProxy = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_immutable_HashSet$SerializationProxy.prototype = ScalaJS.c.scala_collection_immutable_HashSet$SerializationProxy.prototype;
ScalaJS.is.scala_collection_immutable_HashSet$SerializationProxy = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_immutable_HashSet$SerializationProxy)))
});
ScalaJS.as.scala_collection_immutable_HashSet$SerializationProxy = (function(obj) {
  if ((ScalaJS.is.scala_collection_immutable_HashSet$SerializationProxy(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.immutable.HashSet$SerializationProxy")
  }
});
ScalaJS.isArrayOf.scala_collection_immutable_HashSet$SerializationProxy = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_immutable_HashSet$SerializationProxy)))
});
ScalaJS.asArrayOf.scala_collection_immutable_HashSet$SerializationProxy = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_immutable_HashSet$SerializationProxy(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.immutable.HashSet$SerializationProxy;", depth)
  }
});
ScalaJS.data.scala_collection_immutable_HashSet$SerializationProxy = new ScalaJS.ClassTypeData({
  scala_collection_immutable_HashSet$SerializationProxy: 0
}, false, "scala.collection.immutable.HashSet$SerializationProxy", ScalaJS.data.java_lang_Object, {
  scala_collection_immutable_HashSet$SerializationProxy: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_immutable_HashSet$SerializationProxy.prototype.$classData = ScalaJS.data.scala_collection_immutable_HashSet$SerializationProxy;
//@ sourceMappingURL=HashSet$SerializationProxy.js.map
