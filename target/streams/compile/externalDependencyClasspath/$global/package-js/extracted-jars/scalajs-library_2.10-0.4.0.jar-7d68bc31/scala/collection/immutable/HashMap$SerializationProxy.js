/** @constructor */
ScalaJS.c.scala_collection_immutable_HashMap$SerializationProxy = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.scala$collection$immutable$HashMap$SerializationProxy$$orig$1 = null
});
ScalaJS.c.scala_collection_immutable_HashMap$SerializationProxy.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_collection_immutable_HashMap$SerializationProxy.prototype.constructor = ScalaJS.c.scala_collection_immutable_HashMap$SerializationProxy;
ScalaJS.c.scala_collection_immutable_HashMap$SerializationProxy.prototype.scala$collection$immutable$HashMap$SerializationProxy$$orig__Lscala_collection_immutable_HashMap = (function() {
  return this.scala$collection$immutable$HashMap$SerializationProxy$$orig$1
});
ScalaJS.c.scala_collection_immutable_HashMap$SerializationProxy.prototype.scala$collection$immutable$HashMap$SerializationProxy$$orig$und$eq__Lscala_collection_immutable_HashMap__V = (function(x$1) {
  this.scala$collection$immutable$HashMap$SerializationProxy$$orig$1 = x$1
});
ScalaJS.c.scala_collection_immutable_HashMap$SerializationProxy.prototype.writeObject__p1__Ljava_io_ObjectOutputStream__V = (function(out) {
  var s = this.scala$collection$immutable$HashMap$SerializationProxy$$orig__Lscala_collection_immutable_HashMap().size__I();
  out.writeInt__I__V(s);
  this.scala$collection$immutable$HashMap$SerializationProxy$$orig__Lscala_collection_immutable_HashMap().withFilter__Lscala_Function1__Lscala_collection_generic_FilterMonadic(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function() {
    return (function(check$ifrefutable$1) {
      var x1 = check$ifrefutable$1;
      matchEnd3: {
        if ((x1 !== null)) {
          var jsx$1 = true;
          break matchEnd3
        };
        var jsx$1 = false;
        break matchEnd3
      };
      return ScalaJS.bZ(jsx$1)
    })
  })())).foreach__Lscala_Function1__V(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(out$1) {
    return (function(x$7) {
      var x1 = x$7;
      matchEnd3: {
        if ((x1 !== null)) {
          var k = x1.$$und1__O();
          var v = x1.$$und2__O();
          out$1.writeObject__O__V(k);
          out$1.writeObject__O__V(v);
          ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
          break matchEnd3
        };
        throw new ScalaJS.c.scala_MatchError().init___O(x1)
      };
      return ScalaJS.bV(undefined)
    })
  })(out)))
});
ScalaJS.c.scala_collection_immutable_HashMap$SerializationProxy.prototype.readObject__p1__Ljava_io_ObjectInputStream__V = (function(in$2) {
  this.scala$collection$immutable$HashMap$SerializationProxy$$orig$und$eq__Lscala_collection_immutable_HashMap__V(ScalaJS.modules.scala_collection_immutable_HashMap().empty__Lscala_collection_immutable_HashMap());
  var s = in$2.readInt__I();
  ScalaJS.modules.scala_runtime_RichInt().until$extension0__I__I__Lscala_collection_immutable_Range(ScalaJS.modules.scala_Predef().intWrapper__I__I(0), s).foreach$mVc$sp__Lscala_Function1__V(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(arg$outer, in$1) {
    return (function(i) {
      i = ScalaJS.uI(i);
      var key = in$1.readObject__O();
      var value = in$1.readObject__O();
      arg$outer.scala$collection$immutable$HashMap$SerializationProxy$$orig$und$eq__Lscala_collection_immutable_HashMap__V(arg$outer.scala$collection$immutable$HashMap$SerializationProxy$$orig__Lscala_collection_immutable_HashMap().updated__O__O__Lscala_collection_immutable_HashMap(key, value));
      return ScalaJS.bV(undefined)
    })
  })(this, in$2)))
});
ScalaJS.c.scala_collection_immutable_HashMap$SerializationProxy.prototype.readResolve__p1__O = (function() {
  return this.scala$collection$immutable$HashMap$SerializationProxy$$orig__Lscala_collection_immutable_HashMap()
});
ScalaJS.c.scala_collection_immutable_HashMap$SerializationProxy.prototype.init___Lscala_collection_immutable_HashMap = (function(orig) {
  this.scala$collection$immutable$HashMap$SerializationProxy$$orig$1 = orig;
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  return this
});
ScalaJS.c.scala_collection_immutable_HashMap$SerializationProxy.prototype.scala$collection$immutable$HashMap$SerializationProxy$$orig$und$eq__Lscala_collection_immutable_HashMap__ = (function(x$1) {
  return ScalaJS.bV(this.scala$collection$immutable$HashMap$SerializationProxy$$orig$und$eq__Lscala_collection_immutable_HashMap__V(x$1))
});
ScalaJS.c.scala_collection_immutable_HashMap$SerializationProxy.prototype.scala$collection$immutable$HashMap$SerializationProxy$$orig__ = (function() {
  return this.scala$collection$immutable$HashMap$SerializationProxy$$orig__Lscala_collection_immutable_HashMap()
});
/** @constructor */
ScalaJS.inheritable.scala_collection_immutable_HashMap$SerializationProxy = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_immutable_HashMap$SerializationProxy.prototype = ScalaJS.c.scala_collection_immutable_HashMap$SerializationProxy.prototype;
ScalaJS.is.scala_collection_immutable_HashMap$SerializationProxy = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_immutable_HashMap$SerializationProxy)))
});
ScalaJS.as.scala_collection_immutable_HashMap$SerializationProxy = (function(obj) {
  if ((ScalaJS.is.scala_collection_immutable_HashMap$SerializationProxy(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.immutable.HashMap$SerializationProxy")
  }
});
ScalaJS.isArrayOf.scala_collection_immutable_HashMap$SerializationProxy = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_immutable_HashMap$SerializationProxy)))
});
ScalaJS.asArrayOf.scala_collection_immutable_HashMap$SerializationProxy = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_immutable_HashMap$SerializationProxy(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.immutable.HashMap$SerializationProxy;", depth)
  }
});
ScalaJS.data.scala_collection_immutable_HashMap$SerializationProxy = new ScalaJS.ClassTypeData({
  scala_collection_immutable_HashMap$SerializationProxy: 0
}, false, "scala.collection.immutable.HashMap$SerializationProxy", ScalaJS.data.java_lang_Object, {
  scala_collection_immutable_HashMap$SerializationProxy: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_immutable_HashMap$SerializationProxy.prototype.$classData = ScalaJS.data.scala_collection_immutable_HashMap$SerializationProxy;
//@ sourceMappingURL=HashMap$SerializationProxy.js.map
