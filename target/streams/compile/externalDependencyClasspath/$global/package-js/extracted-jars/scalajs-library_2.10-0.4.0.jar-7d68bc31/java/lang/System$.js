/** @constructor */
ScalaJS.c.java_lang_System$ = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.out$1 = null;
  this.err$1 = null;
  this.in$1 = null;
  this.getHighPrecisionTime$1 = null
});
ScalaJS.c.java_lang_System$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.java_lang_System$.prototype.constructor = ScalaJS.c.java_lang_System$;
ScalaJS.c.java_lang_System$.prototype.out__Ljava_io_PrintStream = (function() {
  return this.out$1
});
ScalaJS.c.java_lang_System$.prototype.out$und$eq__Ljava_io_PrintStream__V = (function(x$1) {
  this.out$1 = x$1
});
ScalaJS.c.java_lang_System$.prototype.err__Ljava_io_PrintStream = (function() {
  return this.err$1
});
ScalaJS.c.java_lang_System$.prototype.err$und$eq__Ljava_io_PrintStream__V = (function(x$1) {
  this.err$1 = x$1
});
ScalaJS.c.java_lang_System$.prototype.$in__Ljava_io_InputStream = (function() {
  return this.in$1
});
ScalaJS.c.java_lang_System$.prototype.in$und$eq__Ljava_io_InputStream__V = (function(x$1) {
  this.in$1 = x$1
});
ScalaJS.c.java_lang_System$.prototype.currentTimeMillis__J = (function() {
  return ScalaJS.modules.scala_scalajs_runtime_Long().fromDouble__D__Lscala_scalajs_runtime_Long(new ScalaJS.g["Date"]()["getTime"]())
});
ScalaJS.c.java_lang_System$.prototype.nanoTime__J = (function() {
  return ScalaJS.modules.scala_scalajs_runtime_Long().fromDouble__D__Lscala_scalajs_runtime_Long((ScalaJS.protect(this.getHighPrecisionTime$1)() * 1000000))
});
ScalaJS.c.java_lang_System$.prototype.arraycopy__O__I__O__I__I__V = (function(src, srcPos, dest, destPos, length) {
  var jsSrc = ScalaJS.modules.java_lang_reflect_Array().getUnderlying__O__Lscala_scalajs_js_Array(src);
  var jsDest = ScalaJS.modules.java_lang_reflect_Array().getUnderlying__O__Lscala_scalajs_js_Array(dest);
  if ((((jsSrc !== jsDest) || (destPos < srcPos)) || ((srcPos + length) < destPos))) {
    var i = 0;
    while ((i < length)) {
      jsDest[(destPos + i)] = jsSrc[(srcPos + i)];
      i = (i + 1)
    }
  } else {
    var i$2 = (length - 1);
    while ((i$2 >= 0)) {
      jsDest[(destPos + i$2)] = jsSrc[(srcPos + i$2)];
      i$2 = (i$2 - 1)
    }
  }
});
ScalaJS.c.java_lang_System$.prototype.identityHashCode__O__I = (function(x) {
  return 42
});
ScalaJS.c.java_lang_System$.prototype.getProperties__Ljava_util_Properties = (function() {
  return ScalaJS.modules.scala_sys_package().error__T__Lscala_Nothing("System.getProperties() not implemented")
});
ScalaJS.c.java_lang_System$.prototype.getProperty__T__T = (function(key) {
  return ScalaJS.modules.scala_sys_package().error__T__Lscala_Nothing("System.getProperty() not implemented")
});
ScalaJS.c.java_lang_System$.prototype.getProperty__T__T__T = (function(key, default$2) {
  return ScalaJS.modules.scala_sys_package().error__T__Lscala_Nothing("System.getProperty() not implemented")
});
ScalaJS.c.java_lang_System$.prototype.clearProperty__T__T = (function(key) {
  return ScalaJS.modules.scala_sys_package().error__T__Lscala_Nothing("System.clearProperty() not implemented")
});
ScalaJS.c.java_lang_System$.prototype.setProperty__T__T__T = (function(key, value) {
  return ScalaJS.modules.scala_sys_package().error__T__Lscala_Nothing("System.setProperty() not implemented")
});
ScalaJS.c.java_lang_System$.prototype.getenv__Ljava_util_Map = (function() {
  return ScalaJS.modules.scala_sys_package().error__T__Lscala_Nothing("System.getenv() not implemented")
});
ScalaJS.c.java_lang_System$.prototype.getenv__T__T = (function(name) {
  return ScalaJS.modules.scala_sys_package().error__T__Lscala_Nothing("System.getenv() not implemented")
});
ScalaJS.c.java_lang_System$.prototype.exit__I__V = (function(status) {
  ScalaJS.modules.java_lang_Runtime().getRuntime__Ljava_lang_Runtime().exit__I__V(status)
});
ScalaJS.c.java_lang_System$.prototype.gc__V = (function() {
  ScalaJS.modules.java_lang_Runtime().getRuntime__Ljava_lang_Runtime().gc__V()
});
ScalaJS.c.java_lang_System$.prototype.init___ = (function() {
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  ScalaJS.moduleInstances.java_lang_System = this;
  this.out$1 = ScalaJS.modules.java_lang_StandardOutPrintStream();
  this.err$1 = ScalaJS.modules.java_lang_StandardErrPrintStream();
  this.in$1 = null;
  if ((!(!ScalaJS.g["performance"]))) {
    if ((!(!ScalaJS.g["performance"]["now"]))) {
      var jsx$1 = (function() {
        return (function() {
          return ScalaJS.g["performance"]["now"]()
        })
      })()
    } else {
      if ((!(!ScalaJS.g["performance"]["webkitNow"]))) {
        var jsx$1 = (function() {
          return (function() {
            return ScalaJS.g["performance"]["webkitNow"]()
          })
        })()
      } else {
        var jsx$1 = (function() {
          return (function() {
            return new ScalaJS.g["Date"]()["getTime"]()
          })
        })()
      }
    }
  } else {
    var jsx$1 = (function() {
      return (function() {
        return new ScalaJS.g["Date"]()["getTime"]()
      })
    })()
  };
  this.getHighPrecisionTime$1 = jsx$1;
  return this
});
ScalaJS.c.java_lang_System$.prototype.gc__ = (function() {
  return ScalaJS.bV(this.gc__V())
});
ScalaJS.c.java_lang_System$.prototype.exit__I__ = (function(status) {
  return ScalaJS.bV(this.exit__I__V(status))
});
ScalaJS.c.java_lang_System$.prototype.getenv__T__ = (function(name) {
  return this.getenv__T__T(name)
});
ScalaJS.c.java_lang_System$.prototype.getenv__ = (function() {
  return this.getenv__Ljava_util_Map()
});
ScalaJS.c.java_lang_System$.prototype.setProperty__T__T__ = (function(key, value) {
  return this.setProperty__T__T__T(key, value)
});
ScalaJS.c.java_lang_System$.prototype.clearProperty__T__ = (function(key$2) {
  return this.clearProperty__T__T(key$2)
});
ScalaJS.c.java_lang_System$.prototype.getProperty__T__T__ = (function(key$3, default$2) {
  return this.getProperty__T__T__T(key$3, default$2)
});
ScalaJS.c.java_lang_System$.prototype.getProperty__T__ = (function(key$4) {
  return this.getProperty__T__T(key$4)
});
ScalaJS.c.java_lang_System$.prototype.getProperties__ = (function() {
  return this.getProperties__Ljava_util_Properties()
});
ScalaJS.c.java_lang_System$.prototype.identityHashCode__O__ = (function(x) {
  return ScalaJS.bI(this.identityHashCode__O__I(x))
});
ScalaJS.c.java_lang_System$.prototype.arraycopy__O__I__O__I__I__ = (function(src, srcPos, dest, destPos, length) {
  return ScalaJS.bV(this.arraycopy__O__I__O__I__I__V(src, srcPos, dest, destPos, length))
});
ScalaJS.c.java_lang_System$.prototype.nanoTime__ = (function() {
  return ScalaJS.bJ(this.nanoTime__J())
});
ScalaJS.c.java_lang_System$.prototype.currentTimeMillis__ = (function() {
  return ScalaJS.bJ(this.currentTimeMillis__J())
});
ScalaJS.c.java_lang_System$.prototype.in$und$eq__Ljava_io_InputStream__ = (function(x$1) {
  return ScalaJS.bV(this.in$und$eq__Ljava_io_InputStream__V(x$1))
});
ScalaJS.c.java_lang_System$.prototype.$in__ = (function() {
  return this.$in__Ljava_io_InputStream()
});
ScalaJS.c.java_lang_System$.prototype.err$und$eq__Ljava_io_PrintStream__ = (function(x$1$2) {
  return ScalaJS.bV(this.err$und$eq__Ljava_io_PrintStream__V(x$1$2))
});
ScalaJS.c.java_lang_System$.prototype.err__ = (function() {
  return this.err__Ljava_io_PrintStream()
});
ScalaJS.c.java_lang_System$.prototype.out$und$eq__Ljava_io_PrintStream__ = (function(x$1$3) {
  return ScalaJS.bV(this.out$und$eq__Ljava_io_PrintStream__V(x$1$3))
});
ScalaJS.c.java_lang_System$.prototype.out__ = (function() {
  return this.out__Ljava_io_PrintStream()
});
/** @constructor */
ScalaJS.inheritable.java_lang_System$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.java_lang_System$.prototype = ScalaJS.c.java_lang_System$.prototype;
ScalaJS.is.java_lang_System$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.java_lang_System$)))
});
ScalaJS.as.java_lang_System$ = (function(obj) {
  if ((ScalaJS.is.java_lang_System$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "java.lang.System")
  }
});
ScalaJS.isArrayOf.java_lang_System$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.java_lang_System$)))
});
ScalaJS.asArrayOf.java_lang_System$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.java_lang_System$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Ljava.lang.System;", depth)
  }
});
ScalaJS.data.java_lang_System$ = new ScalaJS.ClassTypeData({
  java_lang_System$: 0
}, false, "java.lang.System$", ScalaJS.data.java_lang_Object, {
  java_lang_System$: 1,
  java_lang_Object: 1
});
ScalaJS.c.java_lang_System$.prototype.$classData = ScalaJS.data.java_lang_System$;
ScalaJS.moduleInstances.java_lang_System = undefined;
ScalaJS.modules.java_lang_System = (function() {
  if ((!ScalaJS.moduleInstances.java_lang_System)) {
    ScalaJS.moduleInstances.java_lang_System = new ScalaJS.c.java_lang_System$().init___()
  };
  return ScalaJS.moduleInstances.java_lang_System
});
//@ sourceMappingURL=System$.js.map
